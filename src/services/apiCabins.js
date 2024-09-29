import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {

    const { data, error } = await supabase
        .from('cabins')
        .select('*')
    if (error) {
        throw new Error("Cabins could not be loaded")
    }
    return data
}

export async function createCabin(newCabin) {
    // https://bcpelbsjbxvgltbvkceo.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
    // Create Cabin
    const { data, error } = await supabase
        .from('cabins')
        .insert([
            {
                ...newCabin, image: imagePath
            }
        ])
        .select()
    if (error) {
        throw new Error("Cabin can not be created")
    }
    // Upload image
    const { error: storageError } = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);

    //Delete the cabin if there was a error 
    if (storageError) {
        await supabase
            .from('cabins')
            .delete()
            .eq('id', data.id)
    }
}

export async function deleteCabin(id) {
    const { error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)
    if (error) {
        throw new Error("Cabin can not be deleted")
    }
}
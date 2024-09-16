import supabase from "./supabase";

export async function getCabins() {

    const { data, error } = await supabase
        .from('cabins')
        .select('*')
    if (error) {
        throw new Error("Cabins could not be loaded")
    }
    return data
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
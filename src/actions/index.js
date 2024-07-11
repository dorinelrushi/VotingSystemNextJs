"use server";
import connectToDB from "@/database";
import Item from "@/models/Item";

export async function saveItem(data) {
  await connectToDB();

  const { username, password } = data;

  try {
    const newItem = new Item({ username, password });
    await newItem.save();

    const plainItem = newItem.toObject({ getters: true, versionKey: false });
    plainItem._id = plainItem._id.toString();

    return { success: true, data: plainItem };
  } catch (error) {
    console.error("Error saving item:", error);
    return { success: false, error: error.message };
  }
}

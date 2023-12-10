import * as FileSystem from "expo-file-system";

export const getImageBlob = async (imageUri) => {
  try {
    // Read the contents of the image file as a base64 string
    const base64String = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // Convert the base64 string to a blob
    const imageBlob = `data:image/jpeg;base64,${base64String}`;

    return imageBlob;
  } catch (error) {
    console.error("Error reading image file:", error);
    throw error;
  }
};

import { pictureService } from "@/lib/services/picture.service";

const uploadToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("image", file);
    const { data: picture } = await pictureService.upload(formData)
    const url = picture.url;

    return url
}

export default uploadToCloudinary

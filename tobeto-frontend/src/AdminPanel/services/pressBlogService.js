import { toast } from "react-toastify";
import API_CONFIG from "../../Services/ApiConfig";

export const addPress = async (title, text) => {
  try {
    const response = await fetch(`${API_CONFIG.BLOGSPRESS_ADD}
    `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, text }),
    });
    if (response.ok) {
      toast.success("Blog başarıyla eklendi");
    } else {
      toast.error("Blog eklenirken bir hata oluştu");
    }
  } catch (error) {
    console.error("Blog eklenirken bir hata oluştu", error);
  }
};

export const getPress = async () => {
  try {
    const response = await fetch(
      `${API_CONFIG.BLOGSPRESS_GET_LIST}?PageIndex=0&PageSize=30`
    );
    if (!response.ok) throw new Error("Blog verisi çekilemedi");
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Bloglar yüklenirken bir hata oluştu:", error);
    return [];
  }
};

export const deletePress = async (pressId) => {
  try {
    const response = await fetch(`${API_CONFIG.BLOGSPRESS_DELETE}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: pressId }),
    });
    if (!response.ok) 
    throw new Error("Blog silinirken bir hata oluştu");
    toast.success("Blog başarıyla silindi!");
    return true;
  } catch (error) {
    console.error("Blog silinirken bir hata oluştu:", error);
    return false;
  }
};

export const updatePress = async (id, title, text) => {
  try {
    const response = await fetch(`${API_CONFIG.BLOGSPRESS_UPDATE}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, text }),
    });
    if (!response.ok) throw new Error("Blog güncellenirken bir hata oluştu");
    toast.success("Blog başarıyla güncellendi!");
  } catch (error) {
    console.error("Blog güncellenirken bir hata oluştu:", error);
    toast.error("Blog güncellenirken bir hata oluştu");
  }
};
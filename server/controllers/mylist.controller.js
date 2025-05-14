import MyListModal from "../models/mylist.modal.js";

export const addToMyListController = async (request, response) => {
  try {
    const userId = request.userId;
    const {
      productId,
      productTitle,
      image,
      rating,
      price,
      oldPrice,
      brand,
      discount,
    } = request.body;

    const item = await MyListModal.findOne({
      userId: userId,
      productId: productId,
    });

    if (item) {
      return response.status(400).json({
        message: "Item already in My List",
      });
    }

    const myList = new MyListModal({
      productId,
      userId,
      productTitle,
      image,
      rating,
      price,
      oldPrice,
      brand,
      discount,
    });

    const save = await myList.save();

    return response.status(200).json({
      message: "Item product saved in my list",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const deleteToMyListController = async (request, response) => {
  try {
    const myListItem = await MyListModal.findById(request.params.id);

    if (!myListItem) {
      return response.status(404).json({
        message: "The item with this given id was not found",
        error: true,
        success: false,
      });
    }

    const deletedItem = await MyListModal.findByIdAndDelete(request.params.id);

    if (!deletedItem) {
      return response.status(404).json({
        message: "The item is not deleted",
        error: true,
        success: false,
      });
    }

    return response.status(500).json({
      message: "The item removed form my list",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const dgetMyListController = async (request, response) => {
  try {
    const userId = request.userId;
    const myListItem = await MyListModal.find({
      userId: userId,
    });

    return response.status(200).json({
      error: false,
      success: true,
      data: myListItem,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

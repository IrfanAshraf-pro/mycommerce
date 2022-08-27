import React, { useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { MdCloudUpload, MdAttachMoney, MdDelete } from "react-icons/md";
import { TbShoppingCartDiscount } from "react-icons/tb";
import Button from "../features/Button";
import "./CreateItem.css";

import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../firebase.config";
import Loader from "../features/Loader/Loader";

import  {saveItem}  from "../../utils/firebaseFunctions";

function CreateItem() {
	const [name, setName] = useState("");
	const [company, setCompany] = useState("");
	const [image, SetImage] = useState("");
	const [price, setPrice] = useState("");
	const [discount, setDiscount] = useState(0);
	const [imageAsset, setImageAsset] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const uploadImage = (e) => {
		setIsLoading(true);
		const imageFile = e.target.files[0];
		const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
		const uploadTask = uploadBytesResumable(storageRef, imageFile);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const uploadProgress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log(uploadProgress);
			},
			(error) => {
				console.log(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setImageAsset(downloadURL);
					setIsLoading(false);
				});
			}
		);
		console.log(imageFile);
	};

	const deleteImage = () => {
		setIsLoading(true);
		const deleteRef = ref(storage, imageAsset);
		deleteObject(deleteRef).then(() => {
			setImageAsset(null);
			setIsLoading(false);
		});
	};

	const saveDetails = (e) => {
    try {
      e.preventDefault()
      if ((!name || !price || !imageAsset || !price || !company)) {
        window.alert("Please fill all details");
      } else if(price<=discount){
        window.alert('please enter correct discount')
      }
      else {
        const data = {
          id: `${Date.now()}`,
          name,
          imageURL: imageAsset,
          company: company,
          qty: 1,
          price: price,
          discount: discount,
        };
        saveItem(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };


	return (
		<div className="container-create-item ">
			<h1 className="create-item-title flex">Please Enter Details</h1>
			<div className="inner-create-item-container flex">
				<form onSubmit={saveDetails} className="create-item-form flex-col" >
					<div className="create-item-field text-fieldEnter flex">
						<FaMobileAlt className="create-item-icons" />
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							className="input-field"
							placeholder="Please enter mobile name"
						/>
					</div>
					<div className="create-item-field create-item-select-container">
						<select
							name="category"
							onChange={(e) => setCompany(e.target.value)}
							id="category"
							className="create-item-select"
						>
							<option className="create-item-options" value="other">
								Please select a company
							</option>
							<option className="create-item-options" value="samsung">
								Samsung
							</option>
							<option className="create-item-options" value="huawei">
								Huawei
							</option>
						</select>
					</div>
					<div className="create-item-field create-item-upload-image-container flex-col">
						{isLoading ? (
							<Loader />
						) : (
							<>
								{!imageAsset ? (
									<label
										htmlFor="uploadImage"
										className="create-item-image-label flex-col"
									>
										<div className="image-upload-container flex-col">
											<MdCloudUpload className="create-item-icons" />
											<p>Click Here to upload</p>
										</div>
										<input
											type="file"
											name="uploadImage"
											id="uploadImage"
											accept="image/*"
											className="image-upload"
											onChange={uploadImage}
										/>
									</label>
								) : (
									<div className="download-image-container">
										<img
											src={imageAsset}
											alt="uploaded image"
											className="download-image"
										/>
										<div className="btn-delete">
											<Button onClick={deleteImage} buttonSize="btn--large" >
												<MdDelete className="text-white " />
											</Button>
										</div>
									</div>
								)}
							</>
						)}
					</div>
					<div className="crete-item-field flex create-item-priceContainer">
						<div className="flex text-fieldEnter bottom-container">
							<MdAttachMoney className="create-item-icons" />
							<input
								type="text"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
								required
								placeholder="Price"
								className="input-field"
							/>
						</div>
						<div className="flex text-fieldEnter bottom-container">
							<TbShoppingCartDiscount className="create-item-icons" />
							<input
								type="text"
								value={discount}
								onChange={(e) => setDiscount(e.target.value)}
								className="input-field"
								placeholder="Discount if any"
							/>
						</div>
					</div>
					<div className="create-item-field button-container-create-item flex">
						<Button type="submit" buttonSize="btn--wide" value="submit">
							Save
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
export default CreateItem;

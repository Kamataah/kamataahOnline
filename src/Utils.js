
import CryptoJS from 'crypto-js';

const TOKEN_KEY = 'ff591090-0805-4282-8493-e9435a4d3d67';
const setTokenData = (data) => {
    const temp = JSON.stringify(data);
    let enc = encrypt(temp);
    localStorage.setItem(TOKEN_KEY, enc);
}
const getTokenData = () => {
    let session_data = localStorage.getItem(TOKEN_KEY);
    if (session_data && session_data.length > 0) {
        let decrypted = decrypt(session_data);
        if (decrypted && decrypted.length > 0) {
            let data = JSON.parse(decrypted);
            if (data?.access_token?.length > 0) {
                return data;
            }
        }
    }
    return null;
}
const generateRandAlphaNumStr = (len) => {
    let rdmString = '';
    for (
        ;
        rdmString.length < len;
        rdmString += Math.random().toString(36).substring(2)
    );
    return rdmString.substring(0, len);
};

const encrypt = (param) => {
    let key = generateRandAlphaNumStr(32);
    let iv = generateRandAlphaNumStr(16);
    let encrypted = CryptoJS.AES.encrypt(
        CryptoJS.enc.Utf8.parse(param),
        CryptoJS.enc.Utf8.parse(key),
        {
            keySize: 128 / 8,
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        }
    );
    return btoa(key + iv + encrypted.toString());
};

const decrypt = (param) => {
    try {
        param = atob(param);
        param = param.replace(' ', '+');
        let key = CryptoJS.enc.Utf8.parse(param.substring(0, 32));
        let iv = CryptoJS.enc.Utf8.parse(param.substring(32, 32 + 16));
        let encryptedText = param.substring(32 + 16);
        let decrypted = CryptoJS.AES.decrypt(encryptedText, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    } catch {
        return '';
    }
};
const loanTypes = [
    { name: 'Select Loan Type', value: "" },
    { name: 'Personal Loan', value: 1 },
    { name: 'Crop Loan', value: 2 },
    { name: 'Business Loan', value: 3 }
]
function arrayIndex(tableName, id) {
    return (`${tableName}_${id}`)
}
const numeric_dec_Only = (inputText) => {
    if (inputText) {
        if (inputText.split(".").length > 2) {
            return false;
        }
        let afetrDec = inputText.split(".")[1];
        if (afetrDec?.length > 2) {
            return false
        }
        let patt = /^[0-9.]*$/;
        let result = patt.test(inputText.replaceAll(',', '').toString());
        return result;
    } else {
        return true;
    }
};
const numericOnly = (inputText) => {
    if (inputText) {
        let patt = /^\d+$/;
        let result = patt.test(inputText.replaceAll(',', ''));
        return result;
    } else {
        return true;
    }
};
const alphaNumericOnly = (inputText) => {
    if (inputText) {
        let patt = /^[a-zA-Z0-9]+$/;
        let result = patt.test(inputText);
        return result;
    } else {
        return true;
    }
};
const getKeyForTable = (keyLabel, index) => {
    return keyLabel + '_' + index
}

const convertToPayload = (api_name = "", body = {}, header = {}, uriparam = {}, other = "") => {
    let payload = {
        "apiType": api_name,
        "requestPayload": body,
        "requestHeaders": header,
        "uriParams": uriparam,
        "additionalParam": other
    }
    return payload
}

const apiMethods = [
    { id: 0, name: "GET" },
    { id: 1, name: "POST" },
    { id: 2, name: "PUT" },
    { id: 3, name: "DELETE" },
    { id: 4, name: "PATCH" }
]

const productList = [
    {
        category: "Saree",
        name: "Product 1",
        price: "₹ 100",
        startRating: 5,
        image: "/assets/collection/DSC_6929.JPG",
        description: "The blouse worn by the model is for styling purposes only. This saree comes with an unstitched blouse piece.",
        product_details: {
            Fabric: "Georgette",
            Fit: "NA",
            Type: "Craft - Chikankari",
            Neckline: "NA",
            Sleeves: "NA",
            Length: "5.5 Meters X 1.1 Meters",
            "Unstitched Blouse": "0.8 Meters X 1.1 Meters",
            Occasion: "Festive",
            "Product Category": "Womenswear - Saree",
            "Net Quantity": "1N (Unstitched Blouse included)",
            "Wash Care": "Dry Clean",
        }
    },
    {
        category: "HandCrafted Saree",
        name: "Product 1",
        price: "₹ 100",
        startRating: 4,
        image: "/assets/collection/DSC_6950.jpg",
        description: "The blouse worn by the model is for styling purposes only. This saree comes with an unstitched blouse piece.",
        product_details: {
            Fabric: "Georgette",
            Fit: "NA",
            Type: "Craft - Chikankari",
            Neckline: "NA",
            Sleeves: "NA",
            Length: "5.5 Meters X 1.1 Meters",
            "Unstitched Blouse": "0.8 Meters X 1.1 Meters",
            Occasion: "Festive",
            "Product Category": "Womenswear - Saree",
            "Net Quantity": "1N (Unstitched Blouse included)",
            "Wash Care": "Dry Clean",
        }
    },
    {
        category: "Handloom Saree",
        name: "Product 1",
        price: "₹ 100",
        startRating: 4,
        image: "/assets/collection/DSC_6953.JPG",
        description: "The blouse worn by the model is for styling purposes only. This saree comes with an unstitched blouse piece.",
        product_details: {
            Fabric: "Georgette",
            Fit: "NA",
            Type: "Craft - Chikankari",
            Neckline: "NA",
            Sleeves: "NA",
            Length: "5.5 Meters X 1.1 Meters",
            "Unstitched Blouse": "0.8 Meters X 1.1 Meters",
            Occasion: "Festive",
            "Product Category": "Womenswear - Saree",
            "Net Quantity": "1N (Unstitched Blouse included)",
            "Wash Care": "Dry Clean",
        }
    },
    {
        category: "Handloom Saree",
        name: "Product 1",
        price: "₹ 100",
        startRating: 3,
        image: "/assets/collection/DSC_6959.JPG",
        description: "The blouse worn by the model is for styling purposes only. This saree comes with an unstitched blouse piece.",
        product_details: {
            Fabric: "Georgette",
            Fit: "NA",
            Type: "Craft - Chikankari",
            Neckline: "NA",
            Sleeves: "NA",
            Length: "5.5 Meters X 1.1 Meters",
            "Unstitched Blouse": "0.8 Meters X 1.1 Meters",
            Occasion: "Festive",
            "Product Category": "Womenswear - Saree",
            "Net Quantity": "1N (Unstitched Blouse included)",
            "Wash Care": "Dry Clean",
        }
    },
    {
        category: "Saree",
        name: "Product 1",
        price: "₹ 100",
        startRating: 5,
        image: "/assets/collection/DSC_6966.JPG",
        description: "The blouse worn by the model is for styling purposes only. This saree comes with an unstitched blouse piece.",
        product_details: {
            Fabric: "Georgette",
            Fit: "NA",
            Type: "Craft - Chikankari",
            Neckline: "NA",
            Sleeves: "NA",
            Length: "5.5 Meters X 1.1 Meters",
            "Unstitched Blouse": "0.8 Meters X 1.1 Meters",
            Occasion: "Festive",
            "Product Category": "Womenswear - Saree",
            "Net Quantity": "1N (Unstitched Blouse included)",
            "Wash Care": "Dry Clean",
        }
    },
    {
        category: "HandCrafted Saree",
        name: "Product 1",
        price: "₹ 100",
        startRating: 4,
        image: "/assets/collection/DSC_6971.JPG",
        description: "The blouse worn by the model is for styling purposes only. This saree comes with an unstitched blouse piece.",
        product_details: {
            Fabric: "Georgette",
            Fit: "NA",
            Type: "Craft - Chikankari",
            Neckline: "NA",
            Sleeves: "NA",
            Length: "5.5 Meters X 1.1 Meters",
            "Unstitched Blouse": "0.8 Meters X 1.1 Meters",
            Occasion: "Festive",
            "Product Category": "Womenswear - Saree",
            "Net Quantity": "1N (Unstitched Blouse included)",
            "Wash Care": "Dry Clean",
        }
    },
    {
        category: "Handloom Saree",
        name: "Product 1",
        price: "₹ 100",
        startRating: 4,
        image: "/assets/collection/DSC_6982.JPG",
        description: "The blouse worn by the model is for styling purposes only. This saree comes with an unstitched blouse piece.",
        product_details: {
            Fabric: "Georgette",
            Fit: "NA",
            Type: "Craft - Chikankari",
            Neckline: "NA",
            Sleeves: "NA",
            Length: "5.5 Meters X 1.1 Meters",
            "Unstitched Blouse": "0.8 Meters X 1.1 Meters",
            Occasion: "Festive",
            "Product Category": "Womenswear - Saree",
            "Net Quantity": "1N (Unstitched Blouse included)",
            "Wash Care": "Dry Clean",
        }
    },
    {
        category: "Handloom Saree",
        name: "Product 1",
        price: "₹ 100",
        startRating: 3,
        image: "/assets/collection/DSC_6987.JPG",
        description: "The blouse worn by the model is for styling purposes only. This saree comes with an unstitched blouse piece.",
        product_details: {
            Fabric: "Georgette",
            Fit: "NA",
            Type: "Craft - Chikankari",
            Neckline: "NA",
            Sleeves: "NA",
            Length: "5.5 Meters X 1.1 Meters",
            "Unstitched Blouse": "0.8 Meters X 1.1 Meters",
            Occasion: "Festive",
            "Product Category": "Womenswear - Saree",
            "Net Quantity": "1N (Unstitched Blouse included)",
            "Wash Care": "Dry Clean",
        }
    },
    {
        category: "Handloom Saree",
        name: "Product 1",
        price: "₹ 100",
        startRating: 3,
        image: "/assets/collection/DSC_6988.JPG",
        description: "The blouse worn by the model is for styling purposes only. This saree comes with an unstitched blouse piece.",
        product_details: {
            Fabric: "Georgette",
            Fit: "NA",
            Type: "Craft - Chikankari",
            Neckline: "NA",
            Sleeves: "NA",
            Length: "5.5 Meters X 1.1 Meters",
            "Unstitched Blouse": "0.8 Meters X 1.1 Meters",
            Occasion: "Festive",
            "Product Category": "Womenswear - Saree",
            "Net Quantity": "1N (Unstitched Blouse included)",
            "Wash Care": "Dry Clean",
        }
    },
    {
        category: "Handloom Saree",
        name: "Product 1",
        price: "₹ 100",
        startRating: 4,
        image: "/assets/collection/DSC_6992.JPG",
        description: "The blouse worn by the model is for styling purposes only. This saree comes with an unstitched blouse piece.",
        product_details: {
            Fabric: "Georgette",
            Fit: "NA",
            Type: "Craft - Chikankari",
            Neckline: "NA",
            Sleeves: "NA",
            Length: "5.5 Meters X 1.1 Meters",
            "Unstitched Blouse": "0.8 Meters X 1.1 Meters",
            Occasion: "Festive",
            "Product Category": "Womenswear - Saree",
            "Net Quantity": "1N (Unstitched Blouse included)",
            "Wash Care": "Dry Clean",
        }
    },
    {
        category: "HandCrafted Saree",
        name: "Product 1",
        price: "₹ 100",
        startRating: 4,
        image: "/assets/collection/DSC_6998.JPG",
        description: "The blouse worn by the model is for styling purposes only. This saree comes with an unstitched blouse piece.",
        product_details: {
            Fabric: "Georgette",
            Fit: "NA",
            Type: "Craft - Chikankari",
            Neckline: "NA",
            Sleeves: "NA",
            Length: "5.5 Meters X 1.1 Meters",
            "Unstitched Blouse": "0.8 Meters X 1.1 Meters",
            Occasion: "Festive",
            "Product Category": "Womenswear - Saree",
            "Net Quantity": "1N (Unstitched Blouse included)",
            "Wash Care": "Dry Clean",
        }
    },
    {
        category: "Handloom Saree",
        name: "Product 1",
        price: "₹ 100",
        startRating: 4,
        image: "/assets/collection/DSC_7001.JPG",
        description: "The blouse worn by the model is for styling purposes only. This saree comes with an unstitched blouse piece.",
        product_details: {
            Fabric: "Georgette",
            Fit: "NA",
            Type: "Craft - Chikankari",
            Neckline: "NA",
            Sleeves: "NA",
            Length: "5.5 Meters X 1.1 Meters",
            "Unstitched Blouse": "0.8 Meters X 1.1 Meters",
            Occasion: "Festive",
            "Product Category": "Womenswear - Saree",
            "Net Quantity": "1N (Unstitched Blouse included)",
            "Wash Care": "Dry Clean",
        }
    },
    {
        category: "Handloom Saree",
        name: "Product 1",
        price: "₹ 100",
        startRating: 3,
        image: "/assets/collection/DSC_7043.JPG",
        description: "The blouse worn by the model is for styling purposes only. This saree comes with an unstitched blouse piece.",
        product_details: {
            Fabric: "Georgette",
            Fit: "NA",
            Type: "Craft - Chikankari",
            Neckline: "NA",
            Sleeves: "NA",
            Length: "5.5 Meters X 1.1 Meters",
            "Unstitched Blouse": "0.8 Meters X 1.1 Meters",
            Occasion: "Festive",
            "Product Category": "Womenswear - Saree",
            "Net Quantity": "1N (Unstitched Blouse included)",
            "Wash Care": "Dry Clean",
        }
    },

]

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smooth scrolling
    });
};

const scrollToElement = (targetElement) => {
    const element = document.getElementById(targetElement);  // Get the element by ID
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start', // scrolls to the top of the element
        });
    }
}


export {
    loanTypes,
    apiMethods,
    arrayIndex,
    numeric_dec_Only,
    numericOnly,
    alphaNumericOnly,
    getKeyForTable,
    convertToPayload,
    getTokenData,
    setTokenData,
    productList,
    scrollToTop,
    scrollToElement
}


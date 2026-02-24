// ☁️ CLOUDINARY CONFIGURATION
// 100% FREE - No Credit Card Required!

const CLOUDINARY_CONFIG = {
    cloudName: 'dmakme4gw',  // उदा: 'cricket-photos'
    uploadPreset: 'sa7jazok'  // उदा: 'player_photos'
};

// Upload Function
async function uploadToCloudinary(file) {
    try {
        if (!file) {
            throw new Error('कृपया photo निवडा!');
        }

        // Check file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            throw new Error('Photo खूप मोठी आहे! Maximum 10MB');
        }

        // Check file type
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        if (!validTypes.includes(file.type)) {
            throw new Error('कृपया valid image file निवडा (JPG, PNG, GIF, WebP)');
        }

        // Create FormData
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
        formData.append('folder', 'player-photos');

        // Upload
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`,
            {
                method: 'POST',
                body: formData
            }
        );

        if (!response.ok) {
            throw new Error('Upload failed. Check Cloudinary settings.');
        }

        const data = await response.json();
        return data.secure_url;

    } catch (error) {
        console.error('Cloudinary Error:', error);
        throw error;
    }
}

// Check Config
function checkCloudinaryConfig() {
    if (CLOUDINARY_CONFIG.cloudName === 'YOUR_CLOUD_NAME') {
        console.warn('⚠️ Cloudinary config setup नाही केली!');
        return false;
    }
    return true;
}

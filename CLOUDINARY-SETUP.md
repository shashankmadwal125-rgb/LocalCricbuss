# ☁️ CLOUDINARY SETUP GUIDE

## 🎯 Player Photos साठी FREE Storage!

**Cloudinary = 100% FREE image hosting**  
**No Credit Card Required!**

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Account बनवा

1. जा: **https://cloudinary.com/users/register/free**
2. **Sign up with Google** (Fastest!)
3. **Cloud Name** निवडा:
   ```
   उदा: localcricbuzz-players
   उदा: cricket-photos-2026
   ```
4. Email verify करा

✅ Done! Account ready!

---

### Step 2: Upload Preset बनवा

1. **Dashboard** > Top-right **⚙️ Settings**
2. Left sidebar > **Upload** tab
3. Scroll down > **"Upload presets"** section
4. **"Add upload preset"** button click करा

5. Fill करा:
   ```
   Preset name: player_photos
   Signing mode: Unsigned ⚠️ (IMPORTANT!)
   Folder: player-photos (optional)
   ```

6. **Save** button

✅ Upload Preset ready!

---

### Step 3: Config Copy करा

1. **Dashboard** मध्ये top-right corner
2. तुमचं **Cloud Name** दिसेल
   ```
   Example: localcricbuzz-players
   ```
3. Note करा!

---

### Step 4: Project मध्ये Paste करा

1. **js/cloudinary-config.js** file open करा
2. Edit करा:

```javascript
const CLOUDINARY_CONFIG = {
    cloudName: 'localcricbuzz-players',  // ⬅️ तुमचं Cloud Name येथे
    uploadPreset: 'player_photos'         // ⬅️ तुमचं Upload Preset येथे
};
```

3. **Save** करा (Ctrl+S)

✅ Configuration Complete!

---

## ✅ Test करा!

1. **register-player-premium.html** open करा
2. Details भरा
3. Photo upload करा
4. Submit करा
5. Players page वर photo दिसली का check करा!

**काम करत असेल तर Perfect! 🎉**

---

## 📊 Free Plan Features

```
✅ 25 GB bandwidth/month
✅ 25,000 transformations/month
✅ Unlimited storage
✅ Fast CDN delivery
✅ Automatic optimization
✅ No Credit Card needed!
```

**1000+ player photos साठी पुरेसं!**

---

## 🚨 Problems?

### Problem 1: Upload Failed
```
Solution:
- Upload Preset "Unsigned" आहे का check करा
- Cloud Name correct copy केलं का?
```

### Problem 2: Photo दिसत नाही
```
Solution:
- Browser Console (F12) errors check करा
- Cloudinary Dashboard > Media Library पहा
- Photo uploaded झालं का verify करा
```

### Problem 3: Config Error
```
Solution:
- js/cloudinary-config.js properly saved केली का?
- Values quotes मध्ये आहेत का check करा
- Typos check करा
```

---

## 💡 Pro Tip

**Cloudinary Dashboard > Media Library**  
येथे सगळे uploaded photos दिसतील!

---

## ✅ Done!

आता तुमचं:
- ✅ Photo upload system ready
- ✅ Premium players (₹50) working
- ✅ Professional profiles
- ✅ 100% FREE storage!

**Happy Uploading! 📸**

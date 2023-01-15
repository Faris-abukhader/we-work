
<p align="center">
<img src="https://user-images.githubusercontent.com/70070951/195313293-ed597f4f-a617-44d8-8023-75118b55daad.jpg" width="400" height="200">
</p>
<p align="center">
📔<a href="https://github.com/Faris-abukhader/we-work-backend/blob/master/README.md"> English </a>📔 
 </p>
<p align="center">
  باك اند  <a href="https://github.com/Faris-abukhader/we-work-backend">من هنا </a>  
</p>


## 🚩 قائمة المحتويات 


- [المقدمة](#--المقدمة)
- [النماذج والرسم البياني](#--النماذج-والرسم-البياني)
- [تحميل المستودع](#--تحميل-المستودع)
- [تهيئة المشروع](#--تهيئة-المشروع)
- [بنية مجلد المشروع](#--بنية-مجلد-المشروع)
- [الخصائص](#--الخصائص)
- [المكتبات](#-المكتبات)
- [الرخصة](#-الرخصة)




## <img src="https://cdn-icons-png.flaticon.com/512/1436/1436664.png" width="25" height="25" style="padding-right:15px">  المقدمة 

<p>
مشروع WeWork هو مشروع مفتوح المصدر  لمنصة توظيف ، بيحث ينقصم الى قسمين هما باك اند والذي هو ما تقرأه الآن ، والقسم الثاني هو الفرونت اند ، وكما نعلم في الباك اند نقوم بتصميم قاعد البيانات ونقوم بعمل اتصال مؤمن بواسطة API مع لربط كلى القسمين مع بعضهم البعض .
<br/>
هذا ال API سيغطي جزء المصادقة authentication والتي تتكون من عده عناصر وهي تسجيل دخول ، وتسجيل مستخدم جديد ، تفعيل الحساب بواسطة الايميل.
<br/>
في خلال تصميم هذا ال API قمت بانشاء نوعين مختلفين من الحسابات ، الاول وهو صاحب العمل ، والثاني هو الباحث عن العمل .
</br>
يمكن لصاحب العمل نشر اعلانات عمله ، بعد ذلك سيتلقى العروض من الباحثين عن العمل ، اي ان لكل عمل منشور يمكن او يحوي على عدة عروض ، ويمكن لصاحب العمل ان يرفضهن او يقبل واحد منهن ، في حال قبول الطلب ، سيتم اعلام الباحث عن العمل بالتفاصيل وانتظار تاكيد القبول من طرفة لاغلاق هذا الاعلان . يمكن ايضا لصاحب العمل ان يبعث طلب توظيف مباشر بعد نشر العمل من دون انتظار قدوم العروض من قبل الباحثين عن العمل . 
</br>
يمكن لصاحب العمل تقييم كل عمل بعد انتهاء وبهذا سيتم تقييم صاحب كل حساب بناءً على تقيمات اعماله .
</br>
أيضا يمكن للمستخدمين التواصل وارسال الرسائل فيما بينهم لتحسين تجربة العميل على المنصة .
</br>

</p>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  النماذج والرسم البياني

<div style="padding:0px 200px 0px 200px">
<img src='https://user-images.githubusercontent.com/70070951/208335857-f170b261-1f5e-4e5c-9db9-3054b2244eca.png'/>
<img src='https://user-images.githubusercontent.com/70070951/208335844-e7ca7329-b82a-4ee2-a191-57d49b2e242a.png'/>
</div>



## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  تحميل المستودع  


### 🔘 نسخ مستودع المشروع 
1. اذهب الى الصفحة الرئسية للمشروع .
2. في اعلى الصفحة انقر على الزر "code".
3. انسخ رابط المستودع .
4. افتح خط الاوامر terminal على الجهاز الخاص بك.
5. انتقل على المكان المراد تحميل المشروع اليه .
6. ادخل الامر التالي لنسخ مستودع المشروع لجهاز الحاسب الخاص بك:
```
git clone github.com/Faris-abukhader/we-work
```
انقر على الزر enter لاتمام العملية 
```
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `we-work`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
<br/>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  تهيئة المشروع 

لتهيئة المشروع لابد من تحميل NodeJs على جهاز الخاص ، اما اذا كنت تمتلكه بالفعل فتأكد تحميل اخر اصدار.
### 🔘 التأكد من اصدار NodeJs
```
node -v
```

### 🔘 تحميل NodeJs


> لاجهزة وندوز
- يمكن تحميل نسخة ويندوز عبر الصفحة الرسمية ل NodeJs ، يرجى التأكد من تحميل آخر اصدار متاح .
 [الصفحة الرسمية](https://nodejs.org/en/download/)

<br/>

> لاجهزة الماك 
- يمكن تحميل NodeJs عبر اوامر brew 
```
brew install node
```
- يمكنك تحميل نسخة الماك عن طريق  ل NodeJs  [الصفحة الرسمية  ](https://nodejs.org/en/download/)
<br/>
<hr/>


### 🔘 تحميل المكتبات اللازمة 

من خلال شريط الاوامر terminal انتقل الى مكان تواجد الملف package.json ثم ادخل الامر التالي  :
```
npm install 
```


لتشغيل المشروع ادخل الامر التالي : 
```
npm run dev
```

<br/>
<hr/>


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  بنية مجلد المشروع   

```
📦we-work
 ┣ 📂components
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📜AccountTypeCard.js
 ┃ ┣ 📂dashboard
 ┃ ┃ ┣ 📂allWorks
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜allWorks.js
 ┃ ┃ ┣ 📂employerHiringRequest
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜employerHiringRequest.js
 ┃ ┃ ┣ 📂freelancerHiringRequest
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜freelancerHiringRequest.js
 ┃ ┃ ┣ 📂freelancerProducts
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜freelancerProducts.js
 ┃ ┃ ┣ 📂freelancerProposals
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜freelancerProposals.js
 ┃ ┃ ┣ 📂profile
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜profile.js
 ┃ ┃ ┣ 📜SubNav.js
 ┃ ┃ ┗ 📜WelcomingBanner.js
 ┃ ┣ 📂general
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜general.js
 ┃ ┣ 📂jobDetails
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜jobDetails.js
 ┃ ┣ 📂jobList
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜jobList.js
 ┃ ┣ 📂landingPage
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜landingPage.js
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜Footer.js
 ┃ ┃ ┃ ┣ 📜FooterSection.js
 ┃ ┃ ┃ ┣ 📜Navbar.js
 ┃ ┃ ┃ ┣ 📜NewsLetter.js
 ┃ ┃ ┃ ┗ 📜Offcanva.js
 ┃ ┃ ┣ 📜Layout.js
 ┃ ┃ ┗ 📜UserLayout.js
 ┃ ┗ 📂userProfile
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┗ 📜[...nextauth].js
 ┃ ┃ ┗ 📜hello.js
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜signIn.js
 ┃ ┃ ┗ 📜signUp.js
 ┃ ┣ 📂dashboard
 ┃ ┃ ┣ 📂allWorks
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂employer-hired-history
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂freelancer-all-works
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂freelancer-hired-history
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂freelancer-proposals
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂profile
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂freelancer-profile
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂jobDetails
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂jobList
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂profile
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📜_app.js
 ┃ ┗ 📜index.js
 ┣ 📂public
 ┃ ┣ 📂...
 ┣ 📂store
 ┃ ┣ 📂slices
 ┃ ┃ ┣ 📜certification.js
 ┃ ┃ ┣ 📜education.js
 ┃ ┃ ┣ 📜employmentHistory.js
 ┃ ┃ ┣ 📜hiringRequest.js
 ┃ ┃ ┣ 📜item.js
 ┃ ┃ ┣ 📜job.js
 ┃ ┃ ┣ 📜language.js
 ┃ ┃ ┣ 📜product.js
 ┃ ┃ ┗ 📜proposal.js
 ┃ ┗ 📜store.js
 ┣ 📂styles
 ┃ ┣ 📜Home.module.css
 ┃ ┣ 📜Wave.module.css
 ┃ ┗ 📜globals.css
 ┣ 📂utils
 ┃ ┣ 📜citiesList.js
 ┃ ┣ 📜dashboardPages.js
 ┃ ┣ 📜emailValidation.js
 ┃ ┣ 📜fireNotification.js
 ┃ ┣ 📜footerSections.js
 ┃ ┣ 📜hourPerWeek.js
 ┃ ┣ 📜industries.js
 ┃ ┣ 📜jobCategories.js
 ┃ ┣ 📜jobFinishingTimeOptions.js
 ┃ ┣ 📜languageLevels.js
 ┃ ┣ 📜languagesList.js
 ┃ ┣ 📜popularKey.js
 ┃ ┣ 📜salaryRange.js
 ┃ ┗ 📜utils.js
 ┣ 📜.DS_Store
 ┣ 📜.env.local
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜next.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.js
 ┗ 📜tailwind.config.js
 ```


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  الخصائص  

- المصادقة authentication و التفويض authorization لعد طبقات . 
- نظام ادارة الحالة (البيانات) باستخدام مكتبة redux toolkit . 
- استخدام خرائط جوجل لاظهار موقع شركة المُعلن.
- 24 عنصر يمكن اعادة استخدامه ، انظر للملف components -> general
- جميع صفحات المشروع متجاوبة مع جميع الشاشات باختلاف احجامها . 
- تصميمين او نصقين مختلفين .

## 📦 المكتبات


  | اسم المكتبة  | الوصف |
| --- | --- |
| [`@lottiefiles/react-lottie-player`](https://github.com/LottieFiles/lottie-react) | This is a React component for the Lottie Web Player |
| [`@reduxjs/toolkit`](https://www.npmjs.com/package/@reduxjs/toolkit) | Simple. Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more |
| [`next-redux-wrapper`](https://www.npmjs.com/package/next-redux-wrapper) | A HOC that brings Next.js and Redux together |
| [`animate.css`](https://www.npmjs.com/package/animate.css) | Animate.css is a library of ready-to-use, cross-browser animations |
| [`sweetalert2`](https://www.npmjs.com/package/sweetalert2) | A beautiful, responsive, customizable, accessible for JavaScript's popup boxes. |
| [`next-auth`](https://github.com/nextauthjs/next-auth) | is a complete open source authentication solution for Next.js applications. |
| [`react-rating`](https://www.npmjs.com/package/react-rating) | react rating component.  |
| [`google-map-react`](https://www.npmjs.com/package/google-map-react) | is a component written over a small set of the Google Maps API |
| [`tailwindcss`](https://www.npmjs.com/package/tailwindcss) | A utility-first CSS framework for rapidly building custom user interfaces. |


## 📜 الرخصة

هذا المشروع تحت رخصة [MIT](https://github.com/Faris-abukhader/we-work/blob/main/license) © [FaRiS](https://github.com/Faris-abukhader).

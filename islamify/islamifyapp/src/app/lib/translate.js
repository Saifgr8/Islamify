// import { NextResponse } from "next/server";


// export const translateText = async (text, targetLang) =>  {
//     const url = `https://translation.googleapis.com/language/translate/v2?key=`;
//     try {
//         const res = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type' : "application/json"
//             },
//             body: JSON.stringify({
//                 q: text,
//                 target: targetLang
//             })
//         })
//         const data = await res.json();
//         console.log("data from translate is", data)
//         if(data){
//             return NextResponse.json(data.data.translations[0].translatedText)
//         } else {
//             throw new Error(`Translation failed ${data.error.message}`)
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
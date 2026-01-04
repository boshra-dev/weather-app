import axios from "axios";

export async function showSuggestion(city) {
  const lang = /[\u0600-\u06FF]/.test(city) ? "ar" : "en";
  const apiKey = process.env.REACT_APP_CITY_SUGGESTION_API_KEY;
  try {
    const res = await axios.get(
      "https://api.opencagedata.com/geocode/v1/json",
      {
        params: {
          q: city,
          key: apiKey,
          language: lang,
          limit: 5,
        },
      }
    );

    return res.data.results;
  } catch (error) {
    console.error("خطأ أثناء جلب البيانات:", error);
  }
}

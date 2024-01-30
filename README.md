# Ansarolquran with React + Vite

This code defines a React component called "News" that utilizes a news API to display news information in the user interface (UI). The code makes use of React Hooks such as `useState` and `useEffect`, indicating the use of state features like `feedData` and `loading`, as well as side effects for executing specific code at certain times.

Key components of the code:

1. `feedData` and `setFeedData`: These two utilize `useState` for managing the state of news data and loading status. `feedData` stores the news data, and `setFeedData` updates it.

2. `loading` and `setLoading`: These are also from `useState` to manage the loading status. `loading` indicates whether data is currently being loaded.

3. `useEffect`: This side effect executes the `fetchData` function. In this function, a GET request is sent to the news API endpoint. After receiving the data, the `feedData` state is updated, and `loading` is set to `false`. In case of an error, the error is logged to the console, and `loading` is set to `false`.

4. In the render section, if it's in the loading state (`loading` is `true`), a message "Loading..." is displayed. Otherwise, news information is displayed in a container named "news-container." The information is displayed for 9 news items (from `feedData.items.slice(0, 9)`).

5. Each news item is displayed as a `div` with the class "news-item" and includes an image (if available), a title, description, and a link for further reading.

6. The link opens in a new tab (`target="_blank"`) and prevents potential security risks associated with opening links in other windows (`rel="noopener noreferrer"`).

این کد یک کامپوننت React به نام "News" را تعریف می‌کند که از یک API خبری استفاده کرده و اطلاعات خبرها را نمایش می‌دهد. الزاماً این کد به همراه فراخوانی به API و نمایش اطلاعات خبری در واسط کاربری (UI) استفاده می‌شود. 

زیرا این کد از توابع React Hooks مثل `useState` و `useEffect` استفاده می‌کند، منظور از این است که از ویژگی‌های وضعیت مانند `feedData` و `loading` استفاده شده‌اند و همچنین از اثرات جانبی برای اجرای کدها در زمان‌های خاص استفاده شده است.

توضیحات اجزای کلیدی کد:

1. `feedData` و `setFeedData`: این دو از `useState` برای مدیریت وضعیت اطلاعات خبرها و بارگیری استفاده می‌شوند. `feedData` برای ذخیره داده‌های خبرها و `setFeedData` برای به‌روزرسانی آنها.

2. `loading` و `setLoading`: این دو همچنین از `useState` برای مدیریت وضعیت بارگیری استفاده می‌شوند. `loading` برای نشان دادن اینکه آیا اطلاعات در حال بارگیری هستند یا نه.

3. `useEffect`: این اثر جانبی به کمک تابع `fetchData` اجرا می‌شود. در این تابع، یک درخواست GET به آدرس API خبری ارسال می‌شود و پس از دریافت داده‌ها، وضعیت `feedData` به روزرسانی می‌شود و `loading` به `false` تغییر می‌کند. در صورت بروز خطا، خطا در کنسول نمایش داده می‌شود و وضعیت `loading` به `false` تغییر می‌کند.

4. در بخش render، اگر در حال بارگیری باشد (`loading` برابر `true` باشد)، یک پیام "در حال بارگزاری..." نمایش داده می‌شود. در غیر این صورت، اطلاعات خبرها در یک کانتینر به نام "news-container" نمایش داده می‌شوند. این اطلاعات به تعداد 9 خبر (از `feedData.items.slice(0, 9)`) نمایش داده می‌شود.

5. هر خبر به شکل یک `div` با کلاس "news-item" نمایش داده می‌شود و شامل تصویر (اگر وجود داشته باشد)، عنوان، توضیحات و یک لینک برای مطالعه بیشتر است.

6. لینک باز می‌شود در یک تب جدید (`target="_blank"`) و از احتمال نفوذ در سایر پنجره‌ها جلوگیری می‌کند (`rel="noopener noreferrer"`).

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

export const initMetaPixel = () => {
    if (typeof window !== "undefined" && !window.fbq) {
        window.fbq = function () {
            window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
        };

        if (!window._fbq) window._fbq = window.fbq;
        window.fbq.push = window.fbq;
        window.fbq.loaded = true;
        window.fbq.version = "2.0";
        window.fbq.queue = [];

        const script = document.createElement("script");
        script.async = true;
        script.src = "https://connect.facebook.net/en_US/fbevents.js";
        document.head.appendChild(script);

        window.fbq("init", "516633610677844"); // Replace with your actual Pixel ID
        window.fbq("track", "PageView");
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const IpsSubtitlesSlashIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-subtitles-slash ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-subtitles-slash" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-30-23.5c4.6-8.8 7.2-18.9 7.2-29.6l0-320c0-35.3-28.7-64-64-64L96 32c-6.7 0-13.1 1-19.2 2.9L38.8 5.1zm355 278.2l-1.2-.9c-5.3-4.4-8.6-11-8.6-18.4c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-5.3 0-10.2-1.7-14.2-4.6zM461 336l27 0c13.3 0 24 10.7 24 24c0 4.8-1.4 9.3-3.8 13L461 336zm26.4 144L365.5 384 312 384c-13.3 0-24-10.7-24-24c0-11.1 7.5-20.4 17.7-23.2l-62-48.8L152 288c-13.3 0-24-10.7-24-24s10.7-24 24-24l30.8 0L32 121.2 32 416c0 35.3 28.7 64 64 64l391.4 0zM152 336l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" })] })));
};
export default IpsSubtitlesSlashIcon;
//# sourceMappingURL=ips-subtitles-slash.js.map
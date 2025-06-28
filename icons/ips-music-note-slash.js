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
export const IpsMusicNoteSlashIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-music-note-slash ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-music-note-slash" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M512 32c0-9.9-4.5-19.2-12.3-25.2S481.8-1.4 472.2 1l-128 32C330 36.5 320 49.3 320 64l0 64 0 97.5L38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L384 275.7 384 153 487.8 127C502 123.5 512 110.7 512 96l0-64zM272 352c-61.9 0-112 35.8-112 80s50.1 80 112 80s112-35.8 112-80l0-20.8L317.8 359c-14-4.5-29.5-7-45.8-7z" })] })));
};
export default IpsMusicNoteSlashIcon;
//# sourceMappingURL=ips-music-note-slash.js.map
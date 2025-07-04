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
export const IpsPenFancySlashIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-pen-fancy-slash ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-pen-fancy-slash" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L387.9 278.7l161-140.2c17.2-15 27.1-36.7 27.1-59.6c0-43.6-35.4-79-79-79c-22.8 0-44.6 9.9-59.6 27.1L287.1 199.7 38.8 5.1zM318 346.5L211 262.3l-60.1 13.9c-17.1 3.9-30.7 16.9-35.4 33.8L65.7 487.6l95.4-95.4c-.7-2.6-1.1-5.4-1.1-8.3c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1L88.4 510.3 266 460.5c16.9-4.7 29.9-18.3 33.8-35.4L318 346.5z" })] })));
};
export default IpsPenFancySlashIcon;
//# sourceMappingURL=ips-pen-fancy-slash.js.map
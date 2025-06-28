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
export const IpsBarcodeReadIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-barcode-read ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-barcode-read" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M56 48c-4.4 0-8 3.6-8 8l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 56C0 25.1 25.1 0 56 0l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 48zm96 80l16 0c13.3 0 24 10.7 24 24l0 208c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-208c0-13.3 10.7-24 24-24zm160 0l16 0c13.3 0 24 10.7 24 24l0 208c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-208c0-13.3 10.7-24 24-24zm72 24c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24l0 208c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-208zM240 128c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16zM528 56c0-4.4-3.6-8-8-8l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c30.9 0 56 25.1 56 56l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80zM56 464l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-30.9 0-56-25.1-56-56l0-80c0-13.3 10.7-24 24-24s24 10.7 24 24l0 80c0 4.4 3.6 8 8 8zm472-8l0-80c0-13.3 10.7-24 24-24s24 10.7 24 24l0 80c0 30.9-25.1 56-56 56l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c4.4 0 8-3.6 8-8z" })] })));
};
export default IpsBarcodeReadIcon;
//# sourceMappingURL=ips-barcode-read.js.map
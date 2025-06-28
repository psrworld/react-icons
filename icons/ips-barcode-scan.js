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
export const IpsBarcodeScanIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-barcode-scan ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-barcode-scan" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M88 32C74.7 32 64 42.7 64 56l0 136 64 0 0-136c0-13.3-10.7-24-24-24L88 32zM64 456c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-136-64 0 0 136zm96 8c0 8.8 7.2 16 16 16s16-7.2 16-16l0-144-32 0 0 144zm64-8c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-136-64 0 0 136zm0-264l64 0 0-136c0-13.3-10.7-24-24-24l-16 0c-13.3 0-24 10.7-24 24l0 136zm96 264c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-136-64 0 0 136zm0-264l64 0 0-136c0-13.3-10.7-24-24-24l-16 0c-13.3 0-24 10.7-24 24l0 136zM448 464c0 8.8 7.2 16 16 16s16-7.2 16-16l0-144-32 0 0 144zm0-416l0 144 32 0 0-144c0-8.8-7.2-16-16-16s-16 7.2-16 16zm64 408c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-136-64 0 0 136zm0-264l64 0 0-136c0-13.3-10.7-24-24-24l-16 0c-13.3 0-24 10.7-24 24l0 136zm-352 0l32 0 0-144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 144zM24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l592 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 232z" })] })));
};
export default IpsBarcodeScanIcon;
//# sourceMappingURL=ips-barcode-scan.js.map
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
export const IpsBoxBallotIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-box-ballot ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-box-ballot" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M128 32c0-17.7 14.3-32 32-32L416 0c17.7 0 32 14.3 32 32l0 192-320 0 0-192zM0 352l576 0 0 112c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 352zM48 160l48 0 0 96 384 0 0-96 48 0c26.5 0 48 21.5 48 48l0 112L0 320 0 208c0-26.5 21.5-48 48-48z" })] })));
};
export default IpsBoxBallotIcon;
//# sourceMappingURL=ips-box-ballot.js.map
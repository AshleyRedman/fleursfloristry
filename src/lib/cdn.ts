const cdn = 'https://res.cloudinary.com/ajrsoftware/image/upload';
const scale = `c_scale,q_auto,`;
const path = 'v1687032250';

export const cloudinary = (
    name: string,
    dir: string,
    format: 'webp' | 'png' | 'jpg',
    width?: number
): string => `${cdn}/${scale}w_${width ?? 600}/${path}/${dir}/${name}.${format}`;

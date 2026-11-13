// 将站点 Logo (public/favicon.svg) 栅格化为 WoW 可读取的 TGA 插件图标。
// WoW 要求贴图边长为 2 的幂；32 位非压缩 TGA 带 Alpha 通道，客户端可直接加载。
export const ADDON_ICON_NAME = 'icon';
const ICON_SIZE = 64;

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load logo: ${src}`));
    img.src = src;
  });
}

function encodeTga(pixels: Uint8ClampedArray, width: number, height: number): Uint8Array {
  const header = 18;
  const out = new Uint8Array(header + width * height * 4);
  out[2] = 2; // 非压缩真彩色
  out[12] = width & 0xff;
  out[13] = width >> 8;
  out[14] = height & 0xff;
  out[15] = height >> 8;
  out[16] = 32; // 每像素位数
  out[17] = 8; // 8 位 Alpha，原点在左下角

  // canvas 像素为自上而下的 RGBA，TGA 需要自下而上的 BGRA
  let o = header;
  for (let y = height - 1; y >= 0; y--) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      out[o++] = pixels[i + 2];
      out[o++] = pixels[i + 1];
      out[o++] = pixels[i];
      out[o++] = pixels[i + 3];
    }
  }
  return out;
}

export async function renderAddonIconTga(): Promise<Uint8Array> {
  const img = await loadImage(`${import.meta.env.BASE_URL}favicon.svg`);
  const canvas = document.createElement('canvas');
  canvas.width = ICON_SIZE;
  canvas.height = ICON_SIZE;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context unavailable');
  ctx.drawImage(img, 0, 0, ICON_SIZE, ICON_SIZE);
  const { data } = ctx.getImageData(0, 0, ICON_SIZE, ICON_SIZE);
  return encodeTga(data, ICON_SIZE, ICON_SIZE);
}

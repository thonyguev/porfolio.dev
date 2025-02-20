import { Image } from "lucide-react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
interface GalleryProps {
    id: string
    data: string[]
}
export function ButtonGallery({ id, data }: GalleryProps) {
    return <>
        <button
            type="button"
            id={`#open-gallery-${id}`}
            className="flex gap-2 items-center rounded-full bg-gray-100 hover:bg-gray-900 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black border dark:border-gray-600 dark:hover:border-gray-300 px-4 py-1"
            onClick={() => {
                const lightbox = new PhotoSwipeLightbox({
                    gallery: `#gallery-${id}`,
                    children: "a",
                    pswpModule: () => import("photoswipe"),
                });
                lightbox.init();
                lightbox.destroy()

                lightbox.loadAndOpen(0, {
                    gallery: document.querySelector(`#gallery-${id}`)!,
                });

            }}
        >
            <Image className="w-4 h-4" />
            Ver galeria
        </button>
        <Gallery id={id} data={data} />
    </>
}
const Gallery = ({ id, data }: GalleryProps) => {
    return <div className="pswp-gallery hidden" id={`gallery-${id}`}>
        {
            data.map((value) => (
                <a
                    key={value}
                    href="#"
                    data-pswp-src={value}
                    data-pswp-width="2500"
                    data-pswp-height="1400"
                    target="_blank"
                />
            ))
        }
    </div>
}

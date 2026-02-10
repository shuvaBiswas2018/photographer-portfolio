from PIL import Image
import io


def compress_image(
    file_obj,
    target_min_kb=100,
    target_max_kb=300,
    max_width=2400
):
    """
    Compress image to stay between target_min_kb and target_max_kb
    """

    image = Image.open(file_obj)

    # Convert PNG → RGB (JPEG compatible)
    if image.mode in ("RGBA", "P"):
        image = image.convert("RGB")

    # Resize if too large
    if image.width > max_width:
        ratio = max_width / image.width
        new_height = int(image.height * ratio)
        image = image.resize((max_width, new_height), Image.LANCZOS)

    quality = 85
    output = io.BytesIO()

    while quality >= 40:
        output.seek(0)
        output.truncate(0)

        image.save(
            output,
            format="JPEG",
            quality=quality,
            optimize=True
        )

        size_kb = output.tell() / 1024

        if target_min_kb <= size_kb <= target_max_kb:
            break

        quality -= 5

    output.seek(0)
    return output

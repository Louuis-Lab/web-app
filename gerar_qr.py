# Primeiro, instale a biblioteca se ainda não tiver:
# pip install qrcode[pil]

import qrcode

# URL que você quer gerar
url = "https://loouislab.com.br/"

# Gerar o QR code
qr = qrcode.QRCode(
    version=1,  # controla o tamanho do QR code
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,  # tamanho de cada quadrado
    border=4,     # largura da borda
)
qr.add_data(url)
qr.make(fit=True)

# Criar imagem
img = qr.make_image(fill_color="black", back_color="white")

# Salvar
img.save("loouislab_qr.png")

print("QR code gerado em loouislab_qr.png")

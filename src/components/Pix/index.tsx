// Pix.tsx
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function crc16(payload: string) {
  let crc = 0xffff;
  const polynomial = 0x1021;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if (crc & 0x8000) {
        crc = (crc << 1) ^ polynomial;
      } else {
        crc <<= 1;
      }
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

interface PixProps {
  title: string;
  price: number;
}

export default function Pix({ title, price }: PixProps) {
  const quantityChars = price.toFixed(2).toString().length;

  const payloadSemCRC = `00020126330014br.gov.bcb.pix011100842768270520400005303986540${quantityChars}${price.toFixed(
    2
  )}5802BR5925ENNOILE RAQUEL MARTINS FE6009Sao Paulo62290525REC691B2B2F5D8892559971546304`;

  const payload = payloadSemCRC + crc16(payloadSemCRC);

  const [copied, setCopied] = useState(false);

  function copiarPix() {
    navigator.clipboard.writeText(payload);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-4xl font-serif text-[#6B7A5E] font-semibold">{title}</h1>
      <p className="text-xl text-[#6B7A5E] font-serif">Valor: R$ {price.toFixed(2)}</p>
      <div className="p-4 rounded-xl shadow-md border border-[#D7D9CC] bg-[#F8F9F4]">
        <QRCodeSVG value={payload} size={230} className="rounded-lg" />
      </div>
      {/* <textarea
        readOnly
        value={payload}
        className="w-full max-w-md h-28 p-3 border border-[#D7D9CC] rounded-xl text-sm font-mono resize-none bg-[#FCFDF7]"
      /> */}
      <Button
        onClick={copiarPix}
        className="px-8 py-3 rounded-xl bg-[#6B7A5E] text-white hover:bg-[#556244] transition-colors"
      >
        {copied ? "Copiado! ✔️" : "Copiar Pix"}
      </Button>
    </div>
  );
}
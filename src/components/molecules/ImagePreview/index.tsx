import styled from "styled-components";
import Flex from "@/components/layout/Flex";
import { CloseIcon } from "@/components/atoms/IconButton";
import Image from "next/image";

const ImagePreviewContainer = styled.div`
  position: relative;
`;

const CloseBox = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0%;
  width: 30px;
  border-radius: 0 6px 6px 0;
  background-color: #1d3461;
  box-sizing: border-box;
  padding-left: 4px;
  padding-right: 4px;
`;

interface ImagePreviewProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  onRemove?: (src: string) => void;
}

const ImagePreview = ({
  src,
  alt,
  height,
  width,
  onRemove,
}: ImagePreviewProps) => {
  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onRemove && src && onRemove(src);

    return false;
  };

  return (
    <ImagePreviewContainer>
      {/* // eslint-disable-next-line react-hooks/exhaustive-deps */}
      <Image src={src} alt={alt} height={height} width={width} />
      <CloseBox
        alignItems="center"
        justifyContent="center"
        onClick={handleCloseClick}
      >
        <CloseIcon size={24} color="white" />
      </CloseBox>
    </ImagePreviewContainer>
  );
};

export default ImagePreview;

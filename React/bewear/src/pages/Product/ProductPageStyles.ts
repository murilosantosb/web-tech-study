import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  & section.buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  & section.quantidade-produto-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    flex-direction: column;
    margin-top: 5px;

    p {
      font-weight: 600;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 380px;
    gap: 40px;
    align-items: start;
  }
`;

export const GallerySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  min-width: 0;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const ThumbnailList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: auto;
  order: 2;
  width: 100%;

  @media (min-width: 768px) {
    order: 0;
    flex-direction: column;
    flex: 0 0 48px;
    width: 48px;
    gap: 12px;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 560px;
  }
`;

export const ThumbnailButton = styled.button<{ $active?: boolean }>`
  width: 64px;
  height: 64px;
  flex: 0 0 64px;
  padding: 0;
  border: 2px solid transparent;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background: none;

  @media (min-width: 768px) {
    width: 48px;
  height: 48px;
  flex-basis: 48px;
  }

  img { width: 100%; height: 100%; object-fit: cover; display: block; }
  &:hover { border-color: #aaa; }
  ${p => p.$active && `border-color: #000;`}
  &:focus-visible { outline: 2px solid #000; outline-offset: 2px; }
`;

export const MainView = styled.div`
  order: 1;
  width: 100%;
  min-width: 0;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  overflow: hidden;
  background: #f4f4f4;

  @media (min-width: 768px) {
    order: 1;
    flex: 1;
  }

  img { width: 100%; height: 100%; object-fit: cover; display: block;}
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;
  width: 100%;

  @media (min-width: 768px) {
    padding-left: 20px;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
  color: #000;
  line-height: 1.2;
`;

export const ProductSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin: 0;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
  color: #000;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin: 0;
  max-width: 600px;
`;

export const BackLink = styled(Link)`
  margin-top: 30px;
  color: #666;
  text-decoration: underline;
  cursor: pointer;
  display: inline-block;
  width: fit-content;
  font-size: 0.9rem;
`;

export const RelatedSection = styled.section`
  width: 100%;
  margin-top: 40px;
  padding-bottom: 40px;
`;


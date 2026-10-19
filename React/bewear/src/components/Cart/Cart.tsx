import React, { useEffect } from 'react';
import { ShoppingBag, Trash2, Plus, Minus, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { formatBRL } from '../../utils/formatters';
import * as S from './CartStyles';
import * as IS from './CartItemStyles';

const CartItem = ({ item, onUpdateQuantity, onRemove }: {
    item: { product: any, quantity: number },
    onUpdateQuantity: (id: string, delta: number) => void,
    onRemove: (id: string) => void
}) => {
    return (
        <IS.ItemContainer>
            <IS.Thumbnail>
                <img src={item.product.images[0]?.url} alt={item.product.name} />
            </IS.Thumbnail>
            <IS.InfoSection>
                <IS.ProductName>{item.product.name}</IS.ProductName>
                <IS.ProductDesc>{item.product.description?.split('.')[0]}</IS.ProductDesc>
                <IS.ControlsSection>
                    <IS.RemoveButton onClick={() => onRemove(item.product.id)} aria-label="Remover item">
                        <Trash2 size={14} />
                    </IS.RemoveButton>
                    <IS.ControlButton onClick={() => onUpdateQuantity(item.product.id, -1)} aria-label="Diminuir quantidade">
                        <Minus size={12} />
                    </IS.ControlButton>
                    <IS.QuantityValue>{item.quantity}</IS.QuantityValue>
                    <IS.ControlButton onClick={() => onUpdateQuantity(item.product.id, 1)} aria-label="Aumentar quantidade">
                        <Plus size={12} />
                    </IS.ControlButton>
                </IS.ControlsSection>
            </IS.InfoSection>
            <IS.Price>{formatBRL(item.product.price || 0)}</IS.Price>
        </IS.ItemContainer>
    );
};

const Cart = () => {
    const { items, isOpen, setIsOpen, updateQuantity, removeFromCart, subtotal } = useCart();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [setIsOpen]);

    if (!isOpen) return null;

    return (
        <S.CartOverlay onClick={() => setIsOpen(false)}>
            <S.CartPanel $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
                <S.CartHeader>
                    <S.HeaderTitle>
                        <ShoppingBag size={20} />
                        <span>Sacola</span>
                    </S.HeaderTitle>
                    <S.CloseButton onClick={() => setIsOpen(false)} aria-label="Fechar carrinho">
                        <X size={24} />
                    </S.CloseButton>
                </S.CartHeader>

                <S.ProductList>
                    {items.length === 0 ? (
                        <S.EmptyState>
                            <ShoppingBag size={48} />
                            <p>Sua sacola está vazia</p>
                        </S.EmptyState>
                    ) : (
                        items.map(item => (
                            <CartItem
                                key={item.product.id}
                                item={item}
                                onUpdateQuantity={updateQuantity}
                                onRemove={removeFromCart}
                            />
                        ))
                    )}
                </S.ProductList>

                <S.CartFooter>
                    <S.SubtotalRow>
                        <span>Subtotal</span>
                        <span>{formatBRL(subtotal)}</span>
                    </S.SubtotalRow>
                    <S.CheckoutButton>Finalizar a compra</S.CheckoutButton>
                    <S.ContinueLink onClick={() => setIsOpen(false)}>Continuar comprando</S.ContinueLink>
                </S.CartFooter>
            </S.CartPanel>
        </S.CartOverlay>
    );
};

export default Cart;

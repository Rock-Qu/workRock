export const formatPrice = (price) => {

        return price.toLocaleString('zh', {
            style: 'currency', currency : 'CNY'
        })

};
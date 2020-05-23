import React from "react";
import style from './Users.module.css';
import ShowLoadingAnimation from "../common/ShowLoadingAnimation/ShowLoadingAnimation";
import UserLocal from "./User/UserLocal";


const UsersLocal = (props) => {
// console.log(props);
    let imageLogo = 'data:image/png;base64,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';
    let friendItem = props.users.map(u =>
        <UserLocal
            img={(u.photos.small) ? u.photos.small : imageLogo}
            fullname={u.name}
            status={(u.status) ? u.status : 'Test'}
            // country={u.location.country}
            // city={u.location.city}
            isFollowed={u.followed}
            id={u.id}
            friendFollow={props.follow}
            friendUnFollow={props.unfollow}
            // onFollow={props.onFollow}
        />
    )
    //page pagination
    let pagesCount = Math.ceil(props.totalPage / props.perPage);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);
    console.log(props.setCurPage);
    let pagination = pages.map(p => {
        return <span onClick={() => {
            props.onPageChanged(p)
        }}
                     className={(props.currentPage == p) && style.active}>{p}</span>
    });
    //page pagination

    return <div className={style.friendsContent}>
        {(props.isLoadingStatus) ? <ShowLoadingAnimation/> : ''}
        {friendItem}
        <button onClick={props.onMoreButtonClick} className={style.buttonReadMore}>Read More..</button>
        <div className={style.pagination}>
            <span className={style.paginationSpan}>{pagination}</span>
        </div>
    </div>
}


export default UsersLocal;


// let usersList= [
//     {
//         id: 1,
{/*        status: 'I will Samurai',*/
}
{/*        followed: false,*/
}
//         photo_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAB6CAMAAAC/Z0whAAABJlBMVEX///+e0dIebbDxnlAPER4REiQiXpwda6wRDyDTg0T5+fkaGiAAAAAMDiKZz9DmvJ8AABvRfTeu2Nnl8vLF4+P3olK33N2j19gACByb1NcAYavW6uvv9/cAABMAZq0VVpkAR5EAAA05TFB6oKFkhYbnmE7Zj0qlbT26ekLIkWTOh06+v6htqcODuMdpm7ZRhayRxMs5cKNGfrebvc1XfK1ymsabss80dbRri7XS3euGoL93lrtdXWY3N0BCQkiNjpJpanKLt7grNz5HXGAhKzJRa24oHiKGWTVnRSxGLyZyk5aXYzlVOio1JSN0TzKzxbldLxSbVyLInnbApYfYeSvWm2Xro17YrXzlp2nLtpb3mkK4qpLhxK0AVae4yd4kJDKur7J7fIQpuOgsAAAHf0lEQVRoge2a+V/aSBjGCUJsMLDhCCEKocghtVWRth5tOLyP2rpr223rbmX5//+JnVyQzMw7M0H7y3729UBhmC/PM+/7ThJIJP6P/+O/GdXiWqlcLnhRLpfWitVfSVsrF3IopHk4/xbKa7+EWiwZEZYU4Rql4tPiqiUJxAVQqfR0StcKHFwALaw9DU8SwflQ6fHMYkGc5zILj1vQajkez2WWH7GecQwNIRe2thrT0BCzsJDMIk+gkTsyQJkLrOYaT6BxdNw4gmXGdrbEEyi1GjW1BYlEyFI8IC9HkUA1lVKbhgEyc+U4QHbOGMbRiVpLoVg/azVzEDRXeBKgI6q57vFSqVqtoarr1wBTHAlaahi5ZmtdDXh+1FS1JVGZosZCSWPkrk9VtRHFedEAckgsfYCyMHpnDZUC80NdpxanSJEUAeB1qgHzHG9XmlQktxVU6Y5KJwx9gbV0Z3kND8gaASBylobkZQ99EY2WCBAhzyg5y15KwNOeEM9BHjdzJJTlK91TUYkuc+XkrCXuK5Snx7QahKKm4nXCyFeoK8fgue0dfz7Y7cAt8VEKJUbyADzjml37EYGn9OOCeBKNGApb9CkAkQUA2IQzVatUohKhdaGuZBWSeBLN1BDj/OLy6lxzwr+jcQ3tzrSaBDcpDHgZYrb1pXYHRfuTx6ydQETatgX4IeVmpnoeLm1eBZK0DX3JDf2Df9cpeNhDAoHql6SjgNjduHEs7OpLF5ons/Kx7RO7PvEZeARLdgHwcNEnVj7qur60uXF51dF1JNNlap88kfqm77QKOkXaCtoREG+cyRFVbzs33Y8uU/vgIdvnHKJkiGbqjDhbM99HvXujIaiP1G98kfDhK56tjGNwj/issxQNJLZ7WdFqN85a6hvuQtaOYSJuaxm2Iz03lYDq7c2ND3Nba2fwaQG+ZwENB8Xt7+6CdSlEn+reXDgitT9uwXmwtgMvo3nn1Jp2CQBn0V5BL0xTPpvQRNhCgtUomZsKIlY6PKKzkpXz/AuYGK1I+GzRVJSrCuhpGHmhaRfKJkyM7h9wqiLiBlYZUFxqCosYTVY4VZGrioBCV2VXUWBXsWRlEO8UpS0ERKHk4czBiHBxmC/zwsS2kr+FiQVBoiR9iUOEgeJE8y6PNziQyDI1hkYpnxck5hUGMAbRvH0hSPzKet1xNErmn2JEiSUxHvGbUEF+ZwIxIlyPLvHlvQDw/gebiHUAzjUqkfrQ4Z3KCeykjnMZTshWjqlYX+VcaTRv+bbyTMX2DnhH9uM7XyNnBmxHhi6qzERyc4cnkbgcwC4PAZFt3gT46RUvWXkryZVIXH/gXqQ2v7GQ+neeROKklZs6ksRqdTpjX/SJxBkkF2jewjV5/5IHJM87uJfiWfnKz1PauRV8xDpH/qAj779xgdSrSNwnOUiasboAkHp9hW8rQtKOP74KAKnXAQSyVTJfkEdZ+b9EiNTrj9y24x5lKVGZHSXPz1PoypxI7nzOK4rSCXS2O+g/1iHqTCJw9RE+2wxrxEOESBajqEjnlIAg8l2FL7ByVxJlDknkZw78bhJbpGEYZp6ML3cm4x06tkR4zzKk3tYrJ36jxN/OA1s9+ltXEuf9hwxdW+5Vf9latSzrJ+3VHv5Ej1jJ/Z0tia41wyCS26SBxG3vW0kvrD3Kc/b8R63V/varrRwO5b11hfm6tSPXrYCH4g3lKf35w5ZVl5FUYU+dCPtq9HbrspwMxyrZrYqrkRGyXN/thXUyPXUnmIk0thEvCkyuPhBPeIgSEVKub8+Q/Pfm5ktp7JDApPWWGH+ADXGRO4bYInrhbVsecBmfLomblLGIIXOk6Fv0DtKzFJeIbD3EBuOmolgOjBX/TABK2J4LJCVa77Cxb0mNjki53ov1iYCysStTJSaT/aitmT5ljCNS3jVifQThNSCRsPWQNDUQ+ToOMPEGkphcjbadPYqpvkhatwDj8DlIxNrOG+oYl/gcTzJWvANNRRGu6SIwxrUVTzJWuAoBYqTtUGpjRpRlcSDL1GjbodXGIrbu1RnE5P68m1f3gTGerbS9jR4HDFMj9UGvjZmtB6LADGsZI22HXhsz4i53pwq8Yi1jMtx2aA0nRHwu+iE2ZuI4IgNbD0GJPlE0dR6YiRM62oFqIyDWyf2bHuxURdH3Bx5wNAon6zse0W87VcYIOVbXeS9ziH7beYAl+k3nvSDxgEf02w7UcOYaRQuSS/SPdsCGM9P4dES3Phi1EZvIzRy3PuCGk2S6miHD17jMiP1EJtFnDfA1UmZPrJCResaNLBqm8YelKLMnsmSknfB+gxEM4wRl9oQ3u/uFQpugH/eBiciEiwQianbaHqQG9mQ4OR1Npzb6YzgdjheeUvNesvNb80SiezQvPGIWAcZjezweTu3paIS+R8PiYGFg1rYHTowHg4mdnTh/2uOhPXa/NJeYzo5s20b3DaYD2yf+M9YWJdbGYyRgNJ6iGA3QzRjZhhTZ6GbU8IkTbYgsTQ2z6cGgNhloE2TywhodV93EQpail438TE8mk7SGEkNzsi2UOe531vsWy8RYEcyYePKZefEvI6kS9OE+tlgAAAAASUVORK5CYII=',
//         fullName: 'Dmitry K',
{/*        location: {country: 'Belarus', city: 'Minsk'}*/
}
//     },
//     {
//         id: 2,
//         status: 'How do we do',
{/*        followed: true,*/
}
{/*        photo_url: 'data:image/png;base64,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',*/
}
//         fullName: 'Svetlana K',
//         location: {country: 'Belarus', city: 'Minsk'}
//     },
{/*    {*/
}
//         id: 3,
{/*        status: 'Every body dance now',*/
}
//         followed: false,
//         photo_url: 'data:image/png;base64,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',
//         fullName: 'Sergei K',
//         location: {country: 'Ukraine', city: 'Kiev'}
//     },
//     {
//         id: 4,
//         status: 'I will help to create best web sites',
//         followed: false,
//         photo_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAB6CAMAAAC/Z0whAAABJlBMVEX///+e0dIebbDxnlAPER4REiQiXpwda6wRDyDTg0T5+fkaGiAAAAAMDiKZz9DmvJ8AABvRfTeu2Nnl8vLF4+P3olK33N2j19gACByb1NcAYavW6uvv9/cAABMAZq0VVpkAR5EAAA05TFB6oKFkhYbnmE7Zj0qlbT26ekLIkWTOh06+v6htqcODuMdpm7ZRhayRxMs5cKNGfrebvc1XfK1ymsabss80dbRri7XS3euGoL93lrtdXWY3N0BCQkiNjpJpanKLt7grNz5HXGAhKzJRa24oHiKGWTVnRSxGLyZyk5aXYzlVOio1JSN0TzKzxbldLxSbVyLInnbApYfYeSvWm2Xro17YrXzlp2nLtpb3mkK4qpLhxK0AVae4yd4kJDKur7J7fIQpuOgsAAAHf0lEQVRoge2a+V/aSBjGCUJsMLDhCCEKocghtVWRth5tOLyP2rpr223rbmX5//+JnVyQzMw7M0H7y3729UBhmC/PM+/7ThJIJP6P/+O/GdXiWqlcLnhRLpfWitVfSVsrF3IopHk4/xbKa7+EWiwZEZYU4Rql4tPiqiUJxAVQqfR0StcKHFwALaw9DU8SwflQ6fHMYkGc5zILj1vQajkez2WWH7GecQwNIRe2thrT0BCzsJDMIk+gkTsyQJkLrOYaT6BxdNw4gmXGdrbEEyi1GjW1BYlEyFI8IC9HkUA1lVKbhgEyc+U4QHbOGMbRiVpLoVg/azVzEDRXeBKgI6q57vFSqVqtoarr1wBTHAlaahi5ZmtdDXh+1FS1JVGZosZCSWPkrk9VtRHFedEAckgsfYCyMHpnDZUC80NdpxanSJEUAeB1qgHzHG9XmlQktxVU6Y5KJwx9gbV0Z3kND8gaASBylobkZQ99EY2WCBAhzyg5y15KwNOeEM9BHjdzJJTlK91TUYkuc+XkrCXuK5Snx7QahKKm4nXCyFeoK8fgue0dfz7Y7cAt8VEKJUbyADzjml37EYGn9OOCeBKNGApb9CkAkQUA2IQzVatUohKhdaGuZBWSeBLN1BDj/OLy6lxzwr+jcQ3tzrSaBDcpDHgZYrb1pXYHRfuTx6ydQETatgX4IeVmpnoeLm1eBZK0DX3JDf2Df9cpeNhDAoHql6SjgNjduHEs7OpLF5ons/Kx7RO7PvEZeARLdgHwcNEnVj7qur60uXF51dF1JNNlap88kfqm77QKOkXaCtoREG+cyRFVbzs33Y8uU/vgIdvnHKJkiGbqjDhbM99HvXujIaiP1G98kfDhK56tjGNwj/issxQNJLZ7WdFqN85a6hvuQtaOYSJuaxm2Iz03lYDq7c2ND3Nba2fwaQG+ZwENB8Xt7+6CdSlEn+reXDgitT9uwXmwtgMvo3nn1Jp2CQBn0V5BL0xTPpvQRNhCgtUomZsKIlY6PKKzkpXz/AuYGK1I+GzRVJSrCuhpGHmhaRfKJkyM7h9wqiLiBlYZUFxqCosYTVY4VZGrioBCV2VXUWBXsWRlEO8UpS0ERKHk4czBiHBxmC/zwsS2kr+FiQVBoiR9iUOEgeJE8y6PNziQyDI1hkYpnxck5hUGMAbRvH0hSPzKet1xNErmn2JEiSUxHvGbUEF+ZwIxIlyPLvHlvQDw/gebiHUAzjUqkfrQ4Z3KCeykjnMZTshWjqlYX+VcaTRv+bbyTMX2DnhH9uM7XyNnBmxHhi6qzERyc4cnkbgcwC4PAZFt3gT46RUvWXkryZVIXH/gXqQ2v7GQ+neeROKklZs6ksRqdTpjX/SJxBkkF2jewjV5/5IHJM87uJfiWfnKz1PauRV8xDpH/qAj779xgdSrSNwnOUiasboAkHp9hW8rQtKOP74KAKnXAQSyVTJfkEdZ+b9EiNTrj9y24x5lKVGZHSXPz1PoypxI7nzOK4rSCXS2O+g/1iHqTCJw9RE+2wxrxEOESBajqEjnlIAg8l2FL7ByVxJlDknkZw78bhJbpGEYZp6ML3cm4x06tkR4zzKk3tYrJ36jxN/OA1s9+ltXEuf9hwxdW+5Vf9latSzrJ+3VHv5Ej1jJ/Z0tia41wyCS26SBxG3vW0kvrD3Kc/b8R63V/varrRwO5b11hfm6tSPXrYCH4g3lKf35w5ZVl5FUYU+dCPtq9HbrspwMxyrZrYqrkRGyXN/thXUyPXUnmIk0thEvCkyuPhBPeIgSEVKub8+Q/Pfm5ktp7JDApPWWGH+ADXGRO4bYInrhbVsecBmfLomblLGIIXOk6Fv0DtKzFJeIbD3EBuOmolgOjBX/TABK2J4LJCVa77Cxb0mNjki53ov1iYCysStTJSaT/aitmT5ljCNS3jVifQThNSCRsPWQNDUQ+ToOMPEGkphcjbadPYqpvkhatwDj8DlIxNrOG+oYl/gcTzJWvANNRRGu6SIwxrUVTzJWuAoBYqTtUGpjRpRlcSDL1GjbodXGIrbu1RnE5P68m1f3gTGerbS9jR4HDFMj9UGvjZmtB6LADGsZI22HXhsz4i53pwq8Yi1jMtx2aA0nRHwu+iE2ZuI4IgNbD0GJPlE0dR6YiRM62oFqIyDWyf2bHuxURdH3Bx5wNAon6zse0W87VcYIOVbXeS9ziH7beYAl+k3nvSDxgEf02w7UcOYaRQuSS/SPdsCGM9P4dES3Phi1EZvIzRy3PuCGk2S6miHD17jMiP1EJtFnDfA1UmZPrJCResaNLBqm8YelKLMnsmSknfB+gxEM4wRl9oQ3u/uFQpugH/eBiciEiwQianbaHqQG9mQ4OR1Npzb6YzgdjheeUvNesvNb80SiezQvPGIWAcZjezweTu3paIS+R8PiYGFg1rYHTowHg4mdnTh/2uOhPXa/NJeYzo5s20b3DaYD2yf+M9YWJdbGYyRgNJ6iGA3QzRjZhhTZ6GbU8IkTbYgsTQ2z6cGgNhloE2TywhodV93EQpail438TE8mk7SGEkNzsi2UOe531vsWy8RYEcyYePKZefEvI6kS9OE+tlgAAAAASUVORK5CYII=',
//         fullName: 'Andrew K',
//         location: {country: 'USA', city: 'Philadelphia'}
//     },
//     {
//         id: 5,
//         status: 'I will Samurai',
//         followed: false,
//         photo_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAB6CAMAAAC/Z0whAAABJlBMVEX///+e0dIebbDxnlAPER4REiQiXpwda6wRDyDTg0T5+fkaGiAAAAAMDiKZz9DmvJ8AABvRfTeu2Nnl8vLF4+P3olK33N2j19gACByb1NcAYavW6uvv9/cAABMAZq0VVpkAR5EAAA05TFB6oKFkhYbnmE7Zj0qlbT26ekLIkWTOh06+v6htqcODuMdpm7ZRhayRxMs5cKNGfrebvc1XfK1ymsabss80dbRri7XS3euGoL93lrtdXWY3N0BCQkiNjpJpanKLt7grNz5HXGAhKzJRa24oHiKGWTVnRSxGLyZyk5aXYzlVOio1JSN0TzKzxbldLxSbVyLInnbApYfYeSvWm2Xro17YrXzlp2nLtpb3mkK4qpLhxK0AVae4yd4kJDKur7J7fIQpuOgsAAAHf0lEQVRoge2a+V/aSBjGCUJsMLDhCCEKocghtVWRth5tOLyP2rpr223rbmX5//+JnVyQzMw7M0H7y3729UBhmC/PM+/7ThJIJP6P/+O/GdXiWqlcLnhRLpfWitVfSVsrF3IopHk4/xbKa7+EWiwZEZYU4Rql4tPiqiUJxAVQqfR0StcKHFwALaw9DU8SwflQ6fHMYkGc5zILj1vQajkez2WWH7GecQwNIRe2thrT0BCzsJDMIk+gkTsyQJkLrOYaT6BxdNw4gmXGdrbEEyi1GjW1BYlEyFI8IC9HkUA1lVKbhgEyc+U4QHbOGMbRiVpLoVg/azVzEDRXeBKgI6q57vFSqVqtoarr1wBTHAlaahi5ZmtdDXh+1FS1JVGZosZCSWPkrk9VtRHFedEAckgsfYCyMHpnDZUC80NdpxanSJEUAeB1qgHzHG9XmlQktxVU6Y5KJwx9gbV0Z3kND8gaASBylobkZQ99EY2WCBAhzyg5y15KwNOeEM9BHjdzJJTlK91TUYkuc+XkrCXuK5Snx7QahKKm4nXCyFeoK8fgue0dfz7Y7cAt8VEKJUbyADzjml37EYGn9OOCeBKNGApb9CkAkQUA2IQzVatUohKhdaGuZBWSeBLN1BDj/OLy6lxzwr+jcQ3tzrSaBDcpDHgZYrb1pXYHRfuTx6ydQETatgX4IeVmpnoeLm1eBZK0DX3JDf2Df9cpeNhDAoHql6SjgNjduHEs7OpLF5ons/Kx7RO7PvEZeARLdgHwcNEnVj7qur60uXF51dF1JNNlap88kfqm77QKOkXaCtoREG+cyRFVbzs33Y8uU/vgIdvnHKJkiGbqjDhbM99HvXujIaiP1G98kfDhK56tjGNwj/issxQNJLZ7WdFqN85a6hvuQtaOYSJuaxm2Iz03lYDq7c2ND3Nba2fwaQG+ZwENB8Xt7+6CdSlEn+reXDgitT9uwXmwtgMvo3nn1Jp2CQBn0V5BL0xTPpvQRNhCgtUomZsKIlY6PKKzkpXz/AuYGK1I+GzRVJSrCuhpGHmhaRfKJkyM7h9wqiLiBlYZUFxqCosYTVY4VZGrioBCV2VXUWBXsWRlEO8UpS0ERKHk4czBiHBxmC/zwsS2kr+FiQVBoiR9iUOEgeJE8y6PNziQyDI1hkYpnxck5hUGMAbRvH0hSPzKet1xNErmn2JEiSUxHvGbUEF+ZwIxIlyPLvHlvQDw/gebiHUAzjUqkfrQ4Z3KCeykjnMZTshWjqlYX+VcaTRv+bbyTMX2DnhH9uM7XyNnBmxHhi6qzERyc4cnkbgcwC4PAZFt3gT46RUvWXkryZVIXH/gXqQ2v7GQ+neeROKklZs6ksRqdTpjX/SJxBkkF2jewjV5/5IHJM87uJfiWfnKz1PauRV8xDpH/qAj779xgdSrSNwnOUiasboAkHp9hW8rQtKOP74KAKnXAQSyVTJfkEdZ+b9EiNTrj9y24x5lKVGZHSXPz1PoypxI7nzOK4rSCXS2O+g/1iHqTCJw9RE+2wxrxEOESBajqEjnlIAg8l2FL7ByVxJlDknkZw78bhJbpGEYZp6ML3cm4x06tkR4zzKk3tYrJ36jxN/OA1s9+ltXEuf9hwxdW+5Vf9latSzrJ+3VHv5Ej1jJ/Z0tia41wyCS26SBxG3vW0kvrD3Kc/b8R63V/varrRwO5b11hfm6tSPXrYCH4g3lKf35w5ZVl5FUYU+dCPtq9HbrspwMxyrZrYqrkRGyXN/thXUyPXUnmIk0thEvCkyuPhBPeIgSEVKub8+Q/Pfm5ktp7JDApPWWGH+ADXGRO4bYInrhbVsecBmfLomblLGIIXOk6Fv0DtKzFJeIbD3EBuOmolgOjBX/TABK2J4LJCVa77Cxb0mNjki53ov1iYCysStTJSaT/aitmT5ljCNS3jVifQThNSCRsPWQNDUQ+ToOMPEGkphcjbadPYqpvkhatwDj8DlIxNrOG+oYl/gcTzJWvANNRRGu6SIwxrUVTzJWuAoBYqTtUGpjRpRlcSDL1GjbodXGIrbu1RnE5P68m1f3gTGerbS9jR4HDFMj9UGvjZmtB6LADGsZI22HXhsz4i53pwq8Yi1jMtx2aA0nRHwu+iE2ZuI4IgNbD0GJPlE0dR6YiRM62oFqIyDWyf2bHuxURdH3Bx5wNAon6zse0W87VcYIOVbXeS9ziH7beYAl+k3nvSDxgEf02w7UcOYaRQuSS/SPdsCGM9P4dES3Phi1EZvIzRy3PuCGk2S6miHD17jMiP1EJtFnDfA1UmZPrJCResaNLBqm8YelKLMnsmSknfB+gxEM4wRl9oQ3u/uFQpugH/eBiciEiwQianbaHqQG9mQ4OR1Npzb6YzgdjheeUvNesvNb80SiezQvPGIWAcZjezweTu3paIS+R8PiYGFg1rYHTowHg4mdnTh/2uOhPXa/NJeYzo5s20b3DaYD2yf+M9YWJdbGYyRgNJ6iGA3QzRjZhhTZ6GbU8IkTbYgsTQ2z6cGgNhloE2TywhodV93EQpail438TE8mk7SGEkNzsi2UOe531vsWy8RYEcyYePKZefEvI6kS9OE+tlgAAAAASUVORK5CYII=',
//         fullName: 'Dmitry K',
//         location: {country: 'Belarus', city: 'Minsk'}
//     },
//     {
//         id: 6,
//         status: 'How do we do',
//         followed: true,
//         photo_url: 'data:image/png;base64,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',
//         fullName: 'Svetlana K',
//         location: {country: 'Belarus', city: 'Minsk'}
//     },
//     {
//         id: 7,
//         status: 'Every body dance now',
//         followed: false,
//         photo_url: 'data:image/png;base64,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',
//         fullName: 'Sergei K',
//         location: {country: 'Ukraine', city: 'Kiev'}
//     },
//     {
//         id: 8,
//         status: 'I will help to create best web sites',
//         followed: false,
//         photo_url: 'data:image/png;base64,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',
//         fullName: 'Andrew K',
//         location: {country: 'USA', city: 'Philadelphia'}
//     },
// ]
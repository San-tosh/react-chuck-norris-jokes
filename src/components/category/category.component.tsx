import {CategoryContainer, CategoryItem, Title, ViewAllCategoryItem, ViewAllIcon} from "./category.styles";
import {useEffect,useState} from "react";
import {getAllCategories} from "../../services/category-service";
import theme from '../../theme/theme';
import icon from '../../assets/icons/path-copy-7.png';
import axios from "axios";

const Category = ({handler} : {handler: Function}) =>{
    const [categories, setCategories] = useState([]);
    const [viewAll, setViewAll] = useState(false);

    useEffect(()=>{
        const cancelToken = axios.CancelToken.source();
        // clean up function
                    getAllCategories(cancelToken).then((res: any) => {
                        setCategories(res)
                    }).catch(err=>{
                        if(axios.isCancel(err)) {
                            console.log('cancelled');
                        } else{
                            console.log(err);
                        }
                    });
                    return () => cancelToken.cancel();
        }, []);
    return (
        <CategoryContainer viewAll={viewAll}>
            {categories.map((category, index: number) => {
                const color = theme.category[index];
                if(index<7 || viewAll) {
                    return (
                        <CategoryItem backgroundColor={color} key={category} onClick={()=>handler(category)}>
                            <Title>{category}</Title>
                        </CategoryItem>
                    )
                } else if(index === 7 && !viewAll) {
                    return (
                        <ViewAllCategoryItem backgroundColor={'#f9f9f9'} key={category} onClick={()=> setViewAll(true)}>
                            <Title>VIEW ALL</Title>
                            <ViewAllIcon src={icon} rotates={false}/>
                        </ViewAllCategoryItem>
                    )
                }
                else {
                    return '';
                }
                }
            )}
            {viewAll && (
                <ViewAllCategoryItem backgroundColor={'#f9f9f9'} onClick={()=> setViewAll(false)}>
                    <Title>VIEW LESS</Title>
                    <ViewAllIcon src={icon} rotates={true}/>
                </ViewAllCategoryItem>
            )}
        </CategoryContainer>
    )
}

export default Category;
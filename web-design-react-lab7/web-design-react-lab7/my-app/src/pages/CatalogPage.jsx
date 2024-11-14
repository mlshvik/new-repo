import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductCatalogList from "../components/ProductCatalogList/ProductCatalogList";
import OptionsCatalog from "../components/OptionsCatalog/OptionsCatalog";

function CatalogPage() {
    return (
        <div className="CatalogPage">
            <Header/>
            <OptionsCatalog/>
            <ProductCatalogList/>
            <Footer/>
        </div>
    );
}

export default CatalogPage;

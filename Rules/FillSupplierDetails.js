export default function FillSupplierDetails(context) {
    /**
     * A propriedade binding guarda o objeto que está em uso,
     * que foi selecionado na listagem.
     */
    const supplierData = context.binding;
    /**
     * Buscamos pelo container da página
     */
    const pageContent = context.getPageProxy().getControl('SectionedTable0');
    /**
     * Utilizando o container, buscamos pelos campos
     * Teremos aqui os que já preenchemos e os que ainda não foram preenchidos
     */
    const pageControls = pageContent.getControls();
    /**
     * Este retorno chama o método logo abaixo, considerando que tenhamos campos na página
     */
    return pageControls && pageControls.length > 0 ? fillControls(pageControls, supplierData) : null;
}

const fillControls = (pageControls, supplierData) => {
    /**
     * Vamos percorrer os campos que foram enviados por parâmetro
     */
    pageControls.forEach(control => {
        /**
         * Identificamos o nome do campo
         * Observe na página que nomeamos cada um para tornar esta etapa mais amigável
         */
        const componentName = control.getName();
        switch (componentName) {
            /**
             * Para cada um dos nomes dos componentes, setamos o
             * valor respectivo do objeto que contém os dados do Supplier
             */
            case 'SupplierName':
                /**
                 * Usamos desestruturação
                 */
                const { SupplierName } = supplierData;
                control.setValue(SupplierName ? SupplierName : 'Undefined');
                break;
            case 'SupplierId':
                const { SupplierId } = supplierData;
                control.setValue(SupplierId ? SupplierId : 'Undefined');
                break;
            case 'Address':
                const { Street, HouseNumber, City, PostalCode } = supplierData;
                const fullAddress = `${Street}, ${HouseNumber}, ${City} - ${PostalCode}`;
                control.setValue(fullAddress);
                break;
            case 'EmailAddress':
                const { EmailAddress } = supplierData;
                control.setValue(EmailAddress ? EmailAddress : 'Undefined');
                break;
            case 'PhoneNumber':
                const { PhoneNumber } = supplierData;
                control.setValue(PhoneNumber ? PhoneNumber : 'Undefined');
                break;
            case 'Timestamp':
                const { UpdatedTimestamp } = supplierData;
                control.setValue(UpdatedTimestamp ? UpdatedTimestamp : 'Undefined');
                break;
            default:
                break;
        }
    });
}

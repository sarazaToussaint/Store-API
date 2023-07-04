const getAllProductsStatic = async (req, res) => {
//   throw new Error('testing async error');
  res.status(200).json({ msg: 'Products setting route' });
}

const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'Products route' });
}

module.exports = {
  getAllProducts,
  getAllProductsStatic
};

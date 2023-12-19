import jwt from 'jsonwebtoken';

const verifyToken = (token) => {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    return decodedData.id;
}

export default verifyToken
export default function FileWhitelist(file){
    // @dev Only file type of image are allowed
    switch (file.type) {
        case 'image/jpeg':
            return true;
        
        case 'image/png':
            return true;
    
        default:
            return false;
    }
}
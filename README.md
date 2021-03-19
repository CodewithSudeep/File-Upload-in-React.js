<h1>Simple Technique to upload file in from React.js to Node.js.</h1>

In this repo, I'll be working on how to upload the files using React.js in a secure, efficient manner.

<hr/>

**Clone the repo**🚀: <i>Note: You can start from scratch
too.</i>

1. Run on terminal
   `https://github.com/sangya2001/File-Upload-in-React.js`
2. Get into the folder and run
   `npm i`


### Things to notice:
1. Packages used: `axios` & `react-toastify`
2. `@dev` denotes the note for the developers
3. `const [file, setFile] = React.useState({ selectedFile: null, uploaded: false })`: Here file has been stored to a variable inside file object.
4. `e.target.files[0]`: This denotes files are stored in an array inside the browsers.


### Solution
**1. Using whitelist of file/type**
```
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
```

Here, the file from input are passed to `FileWhitelist()` where only image file are detected and bool is returned.

```
FileWhitelist(e.target.files[0]) ?
   setFile({
      selectedFile: e.target.files[0],
      uploaded: true, warning: false
   }) :
   setFile({ 
      selectedFile: null, 
      uploaded: false, 
      warning: true 
   })
```
Here, the boolen is checked and if the file is of image type then it is stored on state else the warning is turned up.

<hr/>

Made by <a href="https://github.com/codewithsudeep">CodewithSudeep.</a>
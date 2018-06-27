const COS = require('cos-nodejs-sdk-v5')
const rd = require('rd')
const path = require('path')
const fs = require('fs')

const cos = new COS({
    SecretId: 'AKID8HOKBwO1KYcaVHkSHxgLpAKRVDpGPglh',
    SecretKey: 'Y2OaknhR0RJ7mGH8qV8bxBE5kGi0Fa9Z',
})

const distFilePath = path.resolve('./dist')

rd.readFile('./dist', (err, files) => {
  if (err) {
    console.error('读取文件失败')
  } else {
    files.forEach((file) => {
      let key = file.replace(`${distFilePath}/`, '')
      let filePath = file.replace(`${distFilePath}`, './dist')
      console.log('key', key, 'filePath', filePath, file)
      cos.putObject({
        Bucket: 'atswift2018-1256996397',
        Region: 'ap-beijing',
        Key : key,
        StorageClass: 'STANDARD',
        Body: fs.createReadStream(file)
      }, (err, data) => {
          if (err) {
              console.error(err);
          } else {
              console.log('上传成功', data);
          }
      })
      // cos.sliceUploadFile({
      //     Bucket: 'atswift2018-1256996397',
      //     Region: 'ap-beijing',
      //     Key: key,
      //     FilePath: filePath
      // }, (err, data) => {
      //   console.log(err)
      //   if (err) {
      //     console.error('上传失败')
      //   }
      // })
    })
  }
})

// console.log(cos)
// // 分片上传

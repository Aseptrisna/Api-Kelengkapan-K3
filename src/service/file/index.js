const fs = require("fs");
const util = require("util");
const copyFile = util.promisify(fs.copyFile);
const AWS = require("aws-sdk");

/**
 * @function moveFile
 * Move a file to the new destination
 * @param {String} oldPath
 * @param {String} newPath
 * @returns {Promise<void>}
 */
const moveFile = async (oldPath, newPath) => {
  await copyFile(oldPath, newPath);
};

/**
 * @function getFileExtension
 * Get an extension of a given file name
 * @param {String} fileName
 * @returns {String}
 */
const getFileExtension = (fileName) => {
  return fileName.split(".").pop();
};
const uploadFile = async (bucketName, key, fileContent, mimetype) => {
  AWS.config.update({
    accessKeyId: process.env.accesskey,
    secretAccessKey: process.env.secretkey,
    region: "idn",
    endpoint: process.env.endpoint,
  });

  const s3 = new AWS.S3();

  try {
    const params = {
      Bucket: bucketName,
      Key: key,
      Body: fileContent,
      ContentEncoding: "base64",
      ContentType: mimetype,
    };

    const data = await s3.upload(params).promise();
    return data.Location;
  } catch (error) {
    console.error(`Error uploading file to S3: ${error.message}`);
    throw error;
  }
};
module.exports = {
  moveFile,
  getFileExtension,
  uploadFile,
};
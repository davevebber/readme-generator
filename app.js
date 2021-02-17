const ReadMeDataArgs = process.argv.slice(2);

const printReadMeData = ReadMeDataArr => {
  ReadMeDataArr.forEach(ReadMeItem => console.log(ReadMeItem));
};

printReadMeData(ReadMeDataArgs);
FROM node:4

CMD ["node", "-p", "process.getgid() + ':' + process.getuid()"]

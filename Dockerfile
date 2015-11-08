FROM node:4

RUN groupadd --system app && useradd --system --gid app app
USER app

CMD ["node", "-p", "process.getgid() + ':' + process.getuid()"]

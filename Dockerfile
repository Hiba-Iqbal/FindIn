FROM 032274180776.dkr.ecr.eu-central-1.amazonaws.com/node-images:14 AS builder
WORKDIR /opt/web
COPY package*.json ./
RUN yarn
ENV PATH="./node_modules/.bin:$PATH"
ENV REACT_APP_VERSION=0.1.0
ENV REACT_APP_BASE_URL=https://develop-backend.jobsmideast.com
ENV REACT_APP_MAP_KEY=AIzaSyDxfSNbgNkKIDu45-aJdQpfHwMd7Dft3T4
ENV REACT_APP_HOMEPAGE_URL=https://develop-homepage.jobsmideast.com
ENV REACT_APP_CANDIDATE_PORTAL_URL=https://develop-candidate.jobsmideast.com
ENV REACT_APP_EMPLOYER_PORTAL_URL=https://develop-employer.jobsmideast.com
ENV REACT_APP_AGENCY_PORTAL_URL=https://develop-agency.jobsmideast.com
ENV REACT_APP_CHAT_URL=https://develop-socket.jobsmideast.com/chat

COPY . ./
RUN yarn build
FROM 032274180776.dkr.ecr.eu-central-1.amazonaws.com/nginx-images:1.17
RUN apk --no-cache add curl
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin
COPY ./nginx.config /etc/nginx/nginx.template
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
COPY --from=builder /opt/web/build /usr/share/nginx/html
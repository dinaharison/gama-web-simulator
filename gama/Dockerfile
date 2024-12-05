FROM ubuntu:latest

MAINTAINER RoiArthurB <https://github.com/RoiArthurB>

LABEL org.label-schema.name="GAMA Headless Docker (1.9.3)" \
		org.label-schema.description="Docker image of GAMA headless" \
		org.label-schema.url="http://gama-platform.org" \
		org.label-schema.vcs-ref=$VCS_REF \
		org.label-schema.vcs-url="https://github.com/gama-platform/gama.docker" \
		org.label-schema.vendor="GAMA Platform" \
		org.label-schema.license="GPL-3.0" 

# Update Ubuntu mirror && install needed software
RUN apt update && \
	apt install -y --no-install-recommends curl wget ca-certificates unzip

# Create GAMA workspace
RUN mkdir -p /opt/gama-platform
RUN cd /opt/gama-platform

# Install GAMA v1.9.3 w/o JDK
RUN wget -q https://github.com/gama-platform/gama/releases/download/1.9.3/GAMA_1.9.3_Linux.zip -O "gama.zip" && \
	unzip gama.zip -d /opt/gama-platform

# Set absolute path
RUN sed -i 's/$( dirname "${BASH_SOURCE\[0\]}" )/\/opt\/gama-platform\/headless/g' /opt/gama-platform/headless/gama-headless.sh

# Make script executable
RUN chmod +x /opt/gama-platform/Gama /opt/gama-platform/headless/gama-headless.sh

# Release image 
FROM openjdk:17-jdk-alpine
COPY --from=0 /opt/gama-platform /opt/gama-platform

RUN apk --no-cache add bash ttf-dejavu libstdc++ libc6-compat \
	&& ln -s /opt/gama-platform/headless/gama-headless.sh /usr/sbin/gama-headless

COPY /models /opt/gama-platform/headless

# Docker env
WORKDIR /opt/gama-platform/headless

ENTRYPOINT ["gama-headless"]
CMD ["-help"]

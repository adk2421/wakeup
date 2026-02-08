# 1. Ruby 4.0.1 베이스 이미지 사용
FROM ruby:4.0.1

# 2. 필수 빌드 도구 설치
RUN apt-get update && apt-get install -y \
    build-essential \
    zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

# 3. Docker 작업 디렉토리 설정
WORKDIR /usr/src/app

# 4. Jekyll 및 Bundler 설치
RUN gem install jekyll bundler

# 5. 의존성 설치 (Gemfile이 있는 경우)
COPY Gemfile* ./
RUN bundle install

# 6. 포트 설정
EXPOSE 4000 35729

# 7. Jekyll 서버 실행 (기본적으로 모든 호스트에서 접속 가능하도록 0.0.0.0 설정)
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
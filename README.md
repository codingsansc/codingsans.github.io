# [CodingSans 홈페이지](https://codingsans.me/)

## 폴더 구조
* **.github/workflows**
  - `publish.yml`: 깃허브 페이지를 빌드하고 deploy하는 워크플로우
* **src**: 빌드할 매인 소스코드
* **public**: 아무 작업 없이 그대로 내보내는 파일들. `CNAME` 등등이 오기 적합함
* **publish**: 빌드하는 작업에 관련된 스크립트들이 있는 곳

## publish 워크플로우가 실행될 때 폴더 구조
* **.**: 이 리포가 클론되는 곳
* **output**: deploy되는 파일들

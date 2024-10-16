import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Home(): JSX.Element {
  return (
      <main>
        <section className={`padding-vert--xl container ${styles.heroSection}`}>
          <div className="row margin-bottom--sm">
            <div className="col col--8">
              <div>
                <h2 className={`${styles.hero__title} margin-bottom--lg`}>WEPLI ENGINEERING</h2>
                <p className={`margin-bottom--md ${styles.hero__text}`}>
                  위플리를 만들어가는 저희의 다양한 경험과 실제 사례를 바탕으로한 문제 해결과정을 공유합니다.
                  높은 수준의 코드 품질과 안정적인 서비스를 만들기 위해 노력하고 있습니다.
                </p>
                <p className={`margin-bottom--sm ${styles.hero__text}`}>
                  비즈니스, 모니터링, 설계, 문서화, 로그, 성능 등 다양한 주제를 다루고 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              { title: '비즈니스', link: '/docs/intro', description: '사용자의 상호작용을 로깅하고 분석하여 플레이리스트 생성 및 공유 기능을 최적화합니다. 사용자 데이터를 기반으로 통계를 내고 개인화된 추천을 제공하여 서비스를 개선해 나가고 있습니다.' },
              { title: '모니터링', link: '/docs/intro', description: '안드로이드 앱의 안정성을 확보하기 위해 Firebase Crashlytics, Google Play Console을 통한 사용자 리뷰 모니터링으로 신속한 피드백 수집 및 대응을 하고 있습니다.' },
              { title: '설계', link: '/docs/intro', description: 'Compose 및 MVI 아키텍처를 적용하여 UI와 비즈니스 로직을 효과적으로 분리하고 있습니다. 또한, Version Catalog와 Multi Module을 통해 모듈화와 확장성을 강화하였습니다' },
              { title: '문서화', link: '/docs/intro', description: 'Kotlin Dokka를 사용하여 코드 문서화를 자동화하고, 개발자 간의 효율적인 소통을 지원하고 있습니다.' },
              { title: '로그', link: '/docs/intro', description: '안드로이드 로그 시스템과 ELK 스택을 통합하여 앱의 로그를 수집하고 분석합니다. 이를 통해 사용자 경험을 지속적으로 개선하고, 앱의 성능 관리를 효율적으로 수행합니다.' },
              { title: '성능', link: '/docs/intro', description: 'Android Profiler와 LeakCanary를 사용하여 앱의 성능과 메모리 사용량을 체계적으로 모니터링하고, 성능 최적화를 위한 분석을 실시하고 있습니다.' }
            ].map((feature, idx) => (
              <div className="col col--4" key={idx}>
                <div className={`margin-top--xl shadow--lg ${styles.callout}`}>
                  <div className="card__header">
                    <h3>{feature.title}</h3>
                  </div>
                  <div className="card__body">
                    <p><Link to={feature.link} className={styles.callout__link}>{feature.description}</Link></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
  );
}
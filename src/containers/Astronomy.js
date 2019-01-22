import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogEntry from '../components/Blog';
import Roles from '../components/Roles';
import { Container, Row, Col } from 'reactstrap';
import '../styles/App.css';

class Astronomy extends Component {

  constructor(props){
    super(props);
    this.listProjects = ['Measuring Abundances', 'Detecting Overdensities'];
    this.listItems = this.listProjects.map(project =>
       <li>{project}</li>
     );
   };

  render() {
    return (
      <React.Fragment>
        <Header text='Luis C Vargas: Astronomy'/>
          <Container className="App-astronomy" style={{ color: "white" }}>
            <Row>
              <Col xs="4">
                <ul>
                  {this.listItems}
                </ul>
              </Col>
              <Col xs={{ size: 8, offset: 0 }}>
                <Container className="App-astronomy-blog">
                  <BlogEntry title="M31 Outer Halo Chemistry">
                    <div>
                      We present alpha element to iron abundance ratios, [α/Fe], for
                      four stars in the outer stellar halo of the Andromeda Galaxy (M31).
                      The stars were identified as high-likelihood field halo stars by
                      Gilbert et al. and lie at projected distances between 70 and 140 kpc
                      from M31's center. These are the first alpha abundances measured for
                      a halo star in a galaxy beyond the Milky Way. The stars range in metallicity
                      between [Fe/H] = -2.2 and [Fe/H] = -1.4. The sample's average [α/Fe] ratio is
                      +0.20 ± 0.20. The best-fit average value is elevated above solar, which is
                      consistent with rapid chemical enrichment from Type II supernovae. The mean
                      [α/Fe] ratio of our M31 outer halo sample agrees (within the uncertainties)
                      with that of Milky Way inner/outer halo stars that have a comparable range of [Fe/H].
                    </div>
                    <div><em>
                      Collaborators: Marla Geha (Yale), Karrie Gilbert (STSCI),
                      Erik Tollerud (Yale), Evan Kirby (Caltech), Raja Guhathakurta (UC Santa Cruz)
                    </em>.</div>
                  </BlogEntry>
                  <BlogEntry title="The M31 Satellite System">
                    <div>
                      We have measured [alpha/Fe] for 226 red giant
                      branch stars in nine dwarf galaxies of the Andromeda (M 31)
                      satellite system ([alpha/Fe] is the average of [Mg/Fe], [Si/Fe],
                      [Ca/Fe] and [Ti/Fe]). The abundances are measured from Keck/DEIMOS
                      medium-resolution spectra. The dwarf galaxies in our sample
                      exhibit a variety of alpha abundance ratios, with the average
                      values in each galaxy ranging from approximately solar
                      ([alpha/Fe] ~ +0.0) to alpha-enhanced ([alpha/Fe] ~ +0.5).
                      These variations do not show a correlation with internal kinematics,
                      environment, or stellar density. We homogeneously compare
                      our results to the Milky Way classical dwarf spheroidals,
                      finding evidence for wider variation in average alpha abundance.
                      In the absence of alpha chemical abundances for the M 31 stellar
                      halo, we compare to the Milky Way stellar halo. A stellar
                      halo comprised of disrupted M31 satellites is too metal-rich
                      and inconsistent with the Milky Way halo alpha abundance
                      distribution even if considering only satellites with
                      predominantly old stellar populations. The M 31 satellite
                      population provides a second system in which to study chemical
                      abundances of dwarf galaxies and reveals a wider variety of
                      abundance patterns than the Milky Way.
                    </div>
                    <div>
                      <em> Collaborators: Marla Geha (Yale), Erik Tollerud (Yale)</em>
                    </div>
                  </BlogEntry>
                  <BlogEntry title="Abundance Patterns of the Ultra-Faint Dwarf Galaxies">
                    <div>
                      We have measured alpha abundances (average
                      [alpha/Fe] for 63 stars, and individual [Mg/Fe], [Si/Fe], [Ca/Fe],
                      and [Ti/Fe] for a subset of these) for eight ultra-faint dwarf
                      satellites (UFDs) of the Milky Way using Keck/DEIMOS medium resolution
                      spectra. We find that the UFDs, in analogy with the brighter classical
                      dSphs, have low (solar) [alpha/Fe] abundance ratios at higher [Fe/H].
                      At the lower metallicities in each [Fe/H], the abundance ratios resemble
                      those of the inner Milky Way halo. We argue that the presence
                      of low [alpha/Fe], high [Fe/H] stars indicates that in spite
                      of their low stellar masses, the initial burst of star formation
                      was not enough to very quickly dissipate all gas. In the
                      majority of these galaxies, stars continued to form long
                      enough for the enrichment from the delayed Type Ia supernovae
                      to become visible in the stellar abundances.
                    </div>
                    <div>
                      <em> Collaborators: Marla Geha (Yale), Evan Kirby (UC Irvine), Josh Simon (Carnegie)
                      </em>
                    </div>
                  </BlogEntry>
                </Container>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Astronomy;

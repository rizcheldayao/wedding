import React, { Component } from 'react';
import Data from '../data/data.json';

class Instagram extends Component {
  render () {
    return (
      <div className='instagram'>
        <h3>{Data.instagramTitle}</h3>
        <p>{Data.instagramSubtitle}</p>
        <svg width='29px' height='29px' viewBox='0 0 29 29' version='1.1' xmlns='http://www.w3.org/2000/svg'>
          <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
            <image id='glyph-logo_May2016' x='0' y='0' width='29' height='29' xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAABGdBTUEAA1teXP8meAAABAZJREFUSA2tlduLlVUYh/fkWHYwHNEKM9RURkMIxIvownsV8m5uuuzOAyp4JyhBf0HNhUIqhjdBhRdq9QdEc2MQlAdq7PNIRR46OE7nnufb67ddbjcjwfzg2e+7Dt9613rXYQ91upqD+bv4q7GbYT08D0/BCCyCJ+ER6Nc/VNyBn+A2/ArX4As4Dd+AGoa/dAwY7cVp4N9ZxPEcNxoeiod9B3ZU5Uv458HZT4OZcDIqWdHPpB1Lfx48A2thKUTjODtT0O6BrK7B3w7L4XGoJ0bxoTL9pvE5cJwGMnZvxSuovFIa7LARZkOPlUFexTZgYK1nprMNMhNXrFzdXHDGpkz7aLGYB2S7WVEr4VP4Ht4A5YoTY5cV75WKBuuqVWbZLT14YufTsBi0/TpARQIY2LFM9eVSf8wZJtBF/Kug/uyadsWu2ivhx1vB6/QSGNCrcRa8FidhCr4Fg/rdl/A7eBjPwQvgNWwb7PSBhSI/UKZWjcIpyAoGWQOvAvU6HABTrTxcx8HvJqDTgAUrI4MOl4IBXU0C/YBvALdFazltriaBce/Tu5Ts5zXs/FIKRy0UJaD2E8igH+FvAGeutJZPQPo4kSdA5XDpHwL73LDgs2ThiIUiT6oyTRnMgO7rIFlfBx4rnTJ5iwfBsaadaWZthbL8R+t1OpuK9T19EzwUvjgO5ha4567K+rfgR1Cbu6b7zha/N34CWu8JVanzkc9B+Az/KxuRJzvZ8Tk0oPJxP9N69053KbYm4/cC1I05ue5H9sbDUr+3df8MpvVqKK+TGRmorKpuTBruUjlVGp7F5vpkUvkm9Y61qFR6f6fTod/WQeNn5rfoPFk+8P1cV3yDuqcGkxwW/39FnQUD18r4bXoTJCuwnNP7cfnK/d0PntLsqekWV2T9PjAjymujMiH9evwZ76mPvoFNuXwIL0NSqrXsdUofX65crUyeqvvvaUOFHxyHKCm0vAa+hgxq2k/C4WItp820joIynfVK8yJdsNFH2Y9mensNXK84QWrry1UHpNjLiItwUfafcCY+g2ohmE73zE52cM9M4Xl4DcbAB2MleJ2mYBKc0Pvg/bV//znx+uRk/4Y/8P+03gv71Gmy7MFaUqzlqL+fi1DLoQEXcsy8T4BaBltbrztTA9vuql2xA2Yy7uN10Crrbbef/f3Ow+TK1RZwfOXL1f6JX8U6i0uwEWZSDoirMJDlmeR4DTi+djW02sOvlQm8G38FJD24/0t+5/eO20DG3ovfpkKr3oadrdf9cdUX4Sb4AJiqHBDTqIYqkgEPjYfyRVgG0ThOb3xPW+TMrkBmNhvW8Rw3muNMlYEze9PitXgF9J+GBTACXpNBe2gGvD5mxSv4MzTwOXidvgPVxvkPKCo16YERn7EAAAAASUVORK5CYII=' />
          </g>
        </svg>
        <p>{Data.instagramHashtag}</p>
      </div>
    );
  }
}
export default Instagram;

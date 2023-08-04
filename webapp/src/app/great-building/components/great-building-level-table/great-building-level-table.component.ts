import { Component, Input } from '@angular/core';
import { GreatBuildingReward } from '../../../core/models/great-building-reward.model';

@Component({
  selector: 'app-great-building-level-table',
  templateUrl: './great-building-level-table.component.html',
  styleUrls: ['./great-building-level-table.component.scss']
})
export class GreatBuildingLevelTableComponent {
  @Input() rewards!: GreatBuildingReward[];
  level: number = 1;
  p1ArchBoost: number = 90;
  p2ArchBoost: number = 90;
  p3ArchBoost: number = 90;
  p4ArchBoost: number = 90;
  p5ArchBoost: number = 90;

  getRewardByLevel(level: number): GreatBuildingReward {
    for (let i = 0; i < this.rewards.length; i++) {
      const element = this.rewards[i];
      if(element.level === this.level) {
        return this.rewards[i];
      }
    }
    return this.rewards[0];
  }

  getBoostedReward(reward: number, boost: number): number {
    boost = 1 + boost/100;
    return Math.round(reward*boost);
  }

  getFpToSecure(reward: GreatBuildingReward, boosts: number[]): number[] {
    let fpToSecure: number[] = [];
    fpToSecure.push(Math.max(reward.total - 2 * this.getBoostedReward(reward.p1, boosts[0]), 0));
    fpToSecure.push(Math.max(reward.total - this.getBoostedReward(reward.p1, boosts[0]) - fpToSecure[0] - 2 * this.getBoostedReward(reward.p2, boosts[1]), 0));
    fpToSecure.push(Math.max(reward.total - this.getBoostedReward(reward.p1, boosts[0]) - fpToSecure[0] - this.getBoostedReward(reward.p2, boosts[1]) - fpToSecure[1] - 2 * this.getBoostedReward(reward.p3, boosts[2]), 0));
    fpToSecure.push(Math.max(reward.total - this.getBoostedReward(reward.p1, boosts[0]) - fpToSecure[0] - this.getBoostedReward(reward.p2, boosts[1]) - fpToSecure[1] - this.getBoostedReward(reward.p3, boosts[2]) - fpToSecure[2] - 2 * this.getBoostedReward(reward.p4, boosts[3]), 0));
    fpToSecure.push(Math.max(reward.total - this.getBoostedReward(reward.p1, boosts[0]) - fpToSecure[0] - this.getBoostedReward(reward.p2, boosts[1]) - fpToSecure[1] - this.getBoostedReward(reward.p3, boosts[2]) - fpToSecure[2] - this.getBoostedReward(reward.p4, boosts[3]) - fpToSecure[3] - 2 * this.getBoostedReward(reward.p5, boosts[4]), 0));
    return fpToSecure;
  }

  getTotalFpToSecure(reward: GreatBuildingReward, boosts: number[]): number {
    return this.getFpToSecure(reward, boosts)[0] + this.getFpToSecure(reward, boosts)[1] + this.getFpToSecure(reward, boosts)[2] + this.getFpToSecure(reward, boosts)[3] + this.getFpToSecure(reward, boosts)[4] + this.getBoostedReward(reward.p5, boosts[4]);
  }

  getPercentTotalFpToSecure(fpToSecure: number, total: number): number {
    return 100 * fpToSecure / total;
  }
}

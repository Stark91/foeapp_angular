import { Component, Input } from '@angular/core';
import { GreatBuildingReward } from '../models/great-building-reward.model';

@Component({
  selector: 'app-great-building-rush-table',
  templateUrl: './great-building-rush-table.component.html',
  styleUrls: ['./great-building-rush-table.component.scss']
})
export class GreatBuildingRushTableComponent {
  @Input() rewards!: GreatBuildingReward[];
  startLevel: number = 0;
  endLevel: number = 10;
  p1ArchBoost: number = 90;
  p2ArchBoost: number = 90;
  p3ArchBoost: number = 90;
  p4ArchBoost: number = 90;
  p5ArchBoost: number = 90;
  ownerRadioOptions: string = 'Proprietaire';

  getRushRewards(): GreatBuildingReward[] {
    let rushRewards: GreatBuildingReward[] = [];
    for (let i = 0; i < this.rewards.length; i++) {
      const element = this.rewards[i];
      if(element.level > this.startLevel && element.level <= this.endLevel) {
        rushRewards.push(element);
      }
    }
    return rushRewards;
  }

  getRushTotal(rewards: GreatBuildingReward[]): number {
    let total = 0;
    rewards.forEach(reward => {
      total += reward.total;
    });
    return total;
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

  getTotalFpToSecureRush(rewards: GreatBuildingReward[], boosts: number[]): number {
    let total = 0;
    rewards.forEach(reward => {
      total += this.getTotalFpToSecure(reward, boosts);
    });
    return total;
  }

  getPercentTotalFpToSecureRush(fpToSecure: number, total: number): number {
    return 100 * fpToSecure / total;
  }
}
